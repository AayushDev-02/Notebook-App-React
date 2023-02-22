const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = '$AayushIsAGoodBoy$';

//Create a User using : POST '/api/auth/createuser'. Doesnt require Auth - No login required
router.post('/createuser', [

    body('name', "Enter a valid name").isLength({min: 3}),
    body('email', "Enter a valid email").isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5}),
    
] , async (req, res) => {

    //if there are errors - return bad request and the errors

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already

    try{
        
        let user = await User.findOne({ email: req.body.email });
        if(user){
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
                id:user.id      // we are passing user id into the jwt token so that we can identify the user in the future and because it is fastest way to fetch the data
            }
          }
          //creating a jwt token
          const authToken = jwt.sign(data, JWT_SECRET);
        
        // sending the auth token to the frontend - return to the user when he logs in
        res.json({authToken})
    
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }



})

module.exports = router;