const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = '$AayushIsAGoodBoy$';


//---------------------------------------------- ROUTE 1 --------------------------------------------------------------------
//Create a User using : POST '/api/auth/createuser'. Doesnt require Auth - No login required
router.post('/createuser', [

    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {

    //if there are errors - return bad request and the errors

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already

    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // creating salt - retunrs a promise
        const salt = await bcrypt.genSalt(10);
        // addded salt with password , storing the salt will be done by bcrypt itself in the backend - returns a promis
        const secPass = await bcrypt.hash(req.body.password, salt);

        //create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            //passed the salted password into the backend when creating a new user
            password: secPass,
        });
        //if user is created successfully - return jsonwebtoken
        const data = {
            user: {
                id: user.id      // we are passing user id into the jwt token so that we can identify the user in the future and because it is fastest way to fetch the data
            }
        }
        //creating a jwt token
        const authToken = jwt.sign(data, JWT_SECRET);

        // sending the auth token to the frontend - return to the user when he logs in
        res.json({ authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ------------------------------- ROUTE 2 ------------------------------------------------

// Authenticate a user - endpoint - login using: POST "/api/auth/login"
// creating a function to authenticate the user - login
router.post('/login', [

    //checking if the user has entered a valid email and password
    body('email', "Enter a valid email").isEmail(),
    body('password', "Passowrd cannot be blank").exists(),

], async (req, res) => {
    //if there are errors - return bad request and the errors
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {

        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials ' }] });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            success=false;
            return res.status(400).json({success, errors: [{ msg: 'Invalid Credentials ' }] });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success,authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// --------------------------------- ROUTE: 3 ------------------------------------------------

//Get user details using POST: '/api/auth/getUser' -  login required

router.post('/getuser', fetchUser , async (req, res) => {
    try {
        const userId = req.user.id; //TODO: get the user id from the jwt token;

        const user = await User.findById(userId).select('-password');
        
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


})



module.exports = router;