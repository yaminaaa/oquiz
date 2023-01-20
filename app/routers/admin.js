const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/dashboard', adminController.getDashboard);

module.exports = router;