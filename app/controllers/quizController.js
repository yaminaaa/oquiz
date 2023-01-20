const { Quiz } = require("../models");

const quizController = {
  async showQuiz(req, res) {
    const quiz = await Quiz.findByPk(req.params.id, {
      include: [
        'author',
        'tags',
        {
          association: 'questions',
          include: ['level', 'answers']
        }
      ]
    });

    let view = 'quiz';
    if(req.session.user) {
      view = 'quiz_play';
    }

    res.render(view, { quiz });
  },
  async handleQuiz(req, res) {
    const formAnswers = req.body;

    let score = 0;
    // ICI l'objectif : calculer score.
    // On commence le calcul avec 0 points
    // En amont, récupérer les questions du quiz (req.params.id)
    let quiz = await Quiz.findByPk(req.params.id, {
      include: [
        'author',
        'tags',
      {
        association: 'questions',
        include: ['level', 'goodAnswer', 'answers']
      }]
    });
    // On compare la réponse de CHAQUE question avec l'id de la "bonne réponse"
    for(let question of quiz.questions) {
      const formAnswer = formAnswers[`question_${question.id}`];

      if(formAnswer == question.goodAnswer.id) {
        score += 1;
      }
    }
    // res.send(`Score : ${score}/${quiz.questions.length}`);
    res.render('quiz_finish', { 
      quiz, 
      score,
      formAnswers
     });
  }
}

module.exports = quizController;