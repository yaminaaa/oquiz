const express = require('express');
const mainController = require('../controllers/mainController');
const userConnectedMiddleware = require('../middlewares/userConnectedMiddleware');
const router = express.Router();

router.get('/', mainController.home);

router.get('/protected', userConnectedMiddleware, mainController.protected);

module.exports = router;