const express = require('express');
const quizController = require('../controllers/quizController');
const router = express.Router();

router.get('/quiz/:id', quizController.showQuiz);
router.post('/quiz/:id', quizController.handleQuiz);

module.exports = router;