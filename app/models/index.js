const User = require('./User');
const Quiz = require('./Quiz');
const Question = require('./Question');
const Level = require('./Level');
const Answer = require('./Answer');
const Tag = require('./Tag');

// C'est ici que je vais indiquer à sequelize toutes les relations/liens

// UN Auteur à PLUSIEURS Quiz
// Un User à DES Quiz
User.hasMany(Quiz, {
  foreignKey: 'user_id',
  // sur quel propriété "virtuelle" de User , est-ce que je souhaite mettre l'association
  as: 'quizzes'
});

// EXAMPLE
// let u = User.findByPk(2);
// u.quizzes // tous les quiz dont l'user et l'auteur

// UN Quiz à UN Auteur
// Un Quiz appartient à un user (author)
Quiz.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author'
})
// Example
// let q = Quiz.findByPk(2);
// q.author // Un User qui correspond à l'auteur

// Une Question appartient à un Level
Question.belongsTo(Level, {
  foreignKey: 'level_id',
  as: 'level'
});
// Un Level à plusieurs Questions
Level.hasMany(Question, {
  foreignKey: 'level_id',
  as: 'questions'
});


// Question & Quiz 
// Une question appartient à un Quiz
Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz'
});

// Un Quiz a plusieurs questions
Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questions'
});



// Question & Answer 
// Un Answer appartient à une question
Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question'
});
// Une Question a plusieurs Answer 
Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers'
});

// Une question à Une Answer (La bonne réponse)
Question.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'goodAnswer'
});


// Quiz et Tag
// Un Quiz a plusieurs Tags
Quiz.belongsToMany(Tag, {
  through: 'quiz_has_tag', // la table de la liaison
  foreignKey: 'quiz_id', // La clef de mon type de base,
  otherKey: 'tag_id', // La clef de l'autre type,
  as: 'tags' // la propriété virtuelle qu'il va crée sur Quiz
});
// Un Tag a plusieurs Quiz
Tag.belongsToMany(Quiz, {
  through: 'quiz_has_tag',
  foreignKey: 'tag_id',
  otherKey: 'quiz_id',
  as: 'quizzes'
});


// ... ....

module.exports = {
  User,
  Quiz,
  Question,
  Level,
  Answer,
  Tag 
}