const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const articlesCtrl = require('../controllers/article')

router.get('/home', auth, articlesCtrl.getAllArticles)
router.get('/home/:article_id', auth, articlesCtrl.getOneArticle)
router.get('/userArticles/:employee_id', auth, articlesCtrl.getUserArticles)
router.post('/submitArticle/:employee_id', auth, articlesCtrl.createArticle)
router.delete('/deleteArticle/:article_id', auth, articlesCtrl.deleteOneArticle)

module.exports = router