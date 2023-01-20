module.exports = (req, res, next) => {
  if(req.session.user) { // Si je suis connecté
    next(); // Alors je laisse passer
  } else { // dans le cas contraire 
    res.redirect('/login'); // je le redirige vers login
  }
}