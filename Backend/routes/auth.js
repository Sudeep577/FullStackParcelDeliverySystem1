const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.js');
const router = express.Router();


//REGISTRATION
router.post('/register', registerUser);


//LOGIN
router.post('/login', loginUser);


module.exports = router;