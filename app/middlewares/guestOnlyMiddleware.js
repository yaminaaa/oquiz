module.exports = (req, res, next) => {
  // SI l'utilisateur est connecté 
  if(req.session.user) {
    res.redirect('/');// Alors je redirige vers l'accueil
  } else { // SINON j'affiche la page
    next();
  }
  
  
}