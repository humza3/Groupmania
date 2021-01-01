const article = require('../models/article')
const user = require('../models/user')
const comment = require('../models/comment')

exports.getAllArticles = (req, res) => {
    article.findAll({order: [
        ['date', 'DESC']
      ]})
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}


exports.getOneArticle = (req, res) => {
    article.findOne({ where: {article_id: req.params.article_id}})
    .then((article) => res.status(200).json({article}))
    .catch((error) => res.status(503).json({error}))
}

exports.createArticle = (req, res) => {
			user.findOne({ where: {article_id: req.params.article_id}})
		.then(user => 
			article.create({
				content: req.body.content,
				employee_id: 1,
				unread: 0,
				date: Date.now()
			})
			.then(() => res.status(201).json({message: 'Post submitted'}))
			.catch(error => res.status(500).json({error}))
        }       
    })
    .catch(error => res.status(500).json({error}))
}

exports.getUserArticles = (req, res) => {
    article.findAll({ 
        where : { employee_id: req.params.employee_id },
        order: [
            ['date', 'DESC']
          ]
     })
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}

exports.deleteOneArticle = (req, res) => {
	article.destroy({ where : {article_id: req.params.article_id}})
	.then(() => res.status(200).json({message: 'Post deleted!'}))
	.catch(error => res.status(503).json(error))     
}