const express = require('express');
const User = require('../models/User');
const router = express.Router()


//Create a User using : POST '/api/auth/'. Doesnt require Auth
router.post('/', async (req, res) => {

   console.log(req.body);

   const user = User(req.body);
   await user.save()
    res.send(req.body)


})

module.exports = router;