const bcrypt = require('bcrypt');
const { User } = require('../models');

const loginController = {
  async viewLogin(req, res) {
    res.render('login/login')
  },
  async handleLogin(req, res) {
    console.log(req.body);
    const user = await User.findOne({ // Je vais chercher UN user ou le mail match
      where: {
        email: req.body.email
      }
    });

    if(user){ // j'ai un user, donc le mail est valide
      if(await bcrypt.compare(req.body.password, user.password)) { // si true alors le mdp est bon
        console.log(user);
        req.session.user = user;

        res.redirect('/?connected')
      } else {
        // le mdp est pas bon
        res.redirect('/login?error=WrongEmailOrPassword');
      }
    } else { // sinon j'ai pas trouvé de user
      res.redirect('/login?error=WrongEmailOrPassword');
    }
    
    

  },

  async viewSignUp(req, res) {
    res.render('login/signup');
  },
  async handleSignUp(req, res) {
    try {
      if(req.body.password === req.body.passwordConfirm) {
        req.body.password = await bcrypt.hash(req.body.password, 10);

        const user = await User.create(req.body);

        if(user) {
          res.redirect('/login');
        } else {
          res.redirect('/signUp?error=UnknownError');
        }
      } else {
        res.redirect('/signUp?error=passwordMismatch');
      }
    } catch(err) {
      res.redirect('/signUp?error=UnknownError');
    }
  },

  async doLogout(req, res) {
    req.session.user = null;
    res.redirect('/');
  }
}

module.exports = loginController;