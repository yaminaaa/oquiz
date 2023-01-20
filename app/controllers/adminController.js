const adminController = {
  async getDashboard(req, res) {
    console.log(req.session.user);
    if(req.session.user && req.session.user.role === 'admin') {
      res.send("Admin Dashboard");
    } else {
      res.status(403).send("Unauthorized");
    }
  }
}


module.exports = adminController;