const { Tag } = require("../models");

const tagController = {
  // Pour afficher tous les tags
  async viewAll(req, res) {
    const tags = await Tag.findAll();
    res.render('tags', { tags });

  },

  // Pour afficher un tag avec ses quiz
  async viewOne(req, res) {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{
        association: 'quizzes',
        include: ['author']
      }]
    });

    res.render('tag', { tag });
  }
}

module.exports = tagController;