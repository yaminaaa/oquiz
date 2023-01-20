const express = require('express');
const tagController = require('../controllers/tagController');
const router = express.Router();

// GET - Pour afficher tous les tags
router.get('/tags', tagController.viewAll);

// GET - Afficher UN Tag avec tout ses quiz
router.get('/tags/:id', tagController.viewOne);

module.exports = router;