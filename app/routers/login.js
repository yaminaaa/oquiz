const express = require('express');
const loginController = require('../controllers/loginController');
const guestOnlyMiddleware = require('../middlewares/guestOnlyMiddleware');
const router = express.Router();

// View Login Page - GET
router.get('/login', guestOnlyMiddleware, loginController.viewLogin);

// Handle Login Page - POST
router.post('/login', guestOnlyMiddleware, loginController.handleLogin);


// View SignUp Page
router.get('/signup', guestOnlyMiddleware, loginController.viewSignUp);

// Handle SignUp Page
router.post('/signup', guestOnlyMiddleware, loginController.handleSignUp);


router.get('/logout', loginController.doLogout);
module.exports = router;