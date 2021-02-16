const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const articlesCtrl = require('../controllers/article');

router.post('/articles', auth, articlesCtrl.createArticle);
router.get('/articles', auth, articlesCtrl.getAllArticles);
router.get('/articles/profile/:employee_id', auth, articlesCtrl.getLastArticles);
router.get('/articles/:article_id', auth, articlesCtrl.getOneArticle);
//router.put('/articles/:article_id', auth, articlesCtrl.modifyArticle);
router.delete('/articles/:article_id', auth, articlesCtrl.deleteArticle);

module.exports = router