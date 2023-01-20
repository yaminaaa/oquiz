const Answer = require('../app/_models.poubelle/Answer');
const Level = require('../app/_models.poubelle/Level');
const Tag = require('../app/_models.poubelle/Tag');
const User = require('../app/_models.poubelle/User');

const load = async () => {

  // const u = await User.create({
  //   email: 'wtf@oclock.io',
  //   password: 'DearPrincessCelestia',
  //   firstname: 'WTF',
  //   lastname: 'O Clock'
  // });

  const u = await User.getOne(6);

  // let users = await User..();

  // for(let user of users) {
  //   console.log(user.fullname);
  // }

  u.firstname = 'Bob';
  await u.update();
  
  users = await User.getAll();

  // await u.delete();
  for(let user of users) {
    console.log(user.fullname + ' - ' + user.email + ' - ' + user.password);
  }

  // // J'appelle la methode static getAll de ma classe Level
  // let levels = await Level.getAll();

  // for(let level of levels) {
  //   console.log(level.name);
  // }

  // let answers = await Answer.getAll();

  // for(let answer of answers) {
  //   console.log(answer instanceof Answer, answer.description);
  // }

  

  // // Je récupère le niveau avec l'id 5
  // const level = await Level.getOne(6);
  // console.log("LEVEL", level.name, level instanceof Level);

  // level.name = "Ultra Violence";

  
  // await level.delete();

  // // await level.delete();

  // const l = await Level.create({ name: `OMG WTF BBQ`});
  
  // levels = await Level.getAll();
    
  // for(let level of levels) {
  //   console.log(level.name);
  // }



  //------------- FAIRE LA MEME pour TAG :)

  // 1 - Transformer la classe Tag en Active Record (getAll et getOne)
  // 2 - Lister tous les tags$

//   const tags = await Tag.getAll();
//   for(let tag of tags) {
//     console.log(tag.name);
//   }
//   // 3 - Afficher le 2ème tag dans la bdd

//   const tag = await Tag.getOne(2);
//   console.log(tag.name);
}

load();