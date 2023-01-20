const { Quiz } = require('../models');

const mainController = {
  async home(req, res) {
    const quizzes = await Quiz.findAll({
      include: ['author']
    });
    res.render('home', { quizzes });
  },
  async protected(req, res) {
      res.send('connected');
  }
}

module.exports = mainController;