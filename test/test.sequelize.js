const { User, Quiz, Level, Tag } = require("../app/models");


const load = async () => {
  const u = await User.findByPk(1, {
    include: 'quizzes'
  });

  console.log(`${u.firstname} ${u.lastname}`);
  console.log('--------------')
  for(let q of u.quizzes) {
    console.log(q.title);
  }

  console.log('')
  console.log('-------------------------');

  const q = await Quiz.findByPk(1, {
    include: [
      'author',
      { 
        association: 'questions',
        include: ['answers', 'level', 'goodAnswer']
      },
      'tags']
  });

  console.log(`${q.title} - ${q.author.firstname} ${q.author.lastname}`);
  console.log('')
  console.log('Tags : ');
  console.log(q.tags.map(t => t.name).join(', '));
  console.log('Questions : ');

  for(let question of q.questions) {
    console.log(`> (${question.level.name}) ` + question.question);
    for(let answer of question.answers) {

      let isRightAnswer = ' ';
      if(answer.id == question.goodAnswer.id)
        isRightAnswer = 'X';

      console.log(`     [${isRightAnswer}] ` + answer.description);
    }
  }
  // const levels = await Level.findAll(); // getAll

  // for(const level of levels) {
  //   console.log(level.name);
  // }
  // const answers = await Answer.findAll(); // getAll

  // for(const item of answers) {
  //   console.log(item.description);
  // }
  // const quizzes = await Quiz.findAll(); // getAll

  // for(const q of quizzes) {
  //   console.log(q.title);
  // }

  // const l = await Level.create({ name : 'Easy Peasy Lemon Squeezie'});

  // l.destroy(); // supprimer

  // Level.findByPk(4)// getOne

  // EXO : 
  // 1) Ecrire la requete JS pour récupèrer tous les questions du niveau confirmé 
  // et les afficher 

  const level = await Level.findByPk(2, {
    include: 'questions'
  });

  console.log('Niveau : ' + level.name);
  for(let q of level.questions) {
    console.log(q.question);
  }

  // 2) Ecrire la requete (JS) pour récupérer tous les users et leurs quizzes repectives
  // et les afficher dans la console sous la forme 
  // <nom> <prenom
  // Quizzes :
  //     - X
  //     - Y

  const users = await User.findAll({
    include: ['quizzes']
  });

  for(let u of users) {
    console.log(u.firstname + ' ' + u.lastname);
    for(let q of u.quizzes) {
      console.log(q.title);
    }
  }

  // 3) Ecrire la requete (JS) pour récupérer tous les tags et afficher leur quiz respectives (comme dans le 2)
  // Mais afficher également le nombre de questions dans chaque quiz

  const tags = await Tag.findAll({
    include: [{
      association: 'quizzes',
      include: ['questions']
    }]
  });

  for(let t of tags) {
    console.log('------------');
    console.log(t.name);
    for(let q of t.quizzes) {
      console.log(`   > ${q.title} (${q.questions.length}) `);
    }
  }

}

load();