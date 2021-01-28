const Article = require('../models/article');
const user = require('../models/user');
const comment = require('../models/comment');

exports.createArticle = (req, res, next) => {
	const article = new Article({
		article_id: 45,
		content: req.body.content,
		employee_id: req.body.employee_id,
		unread: 0
	});
	console.log(article);
	article.save().then(
		() => {
			res.status(201).json({
				message: 'Article added successfully!'
				//create article table
			});
		}
	).catch(
		(error) => {
			res.status(500).json({
				error: error
			});
		}
	);
};

exports.getAllArticles = (req, res) => {
    Article.findAll({order: [
        ['date', 'DESC']
      ]})
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}


exports.getOneArticle = (req, res) => {
    Article.findOne({ where: {article_id: req.params.article_id}})
    .then((article) => res.status(200).json({article}))
    .catch((error) => res.status(503).json({error}))
}
/*
exports.createArticle = (req, res) => {
	console.log("typeof employee id", typeof req.body.employee_id);
		article.create({
			content: req.body.content,
			employee_id: req.body.employee_id,
			unread: 0,
			date: "string"
		}).save()
		.then(() => res.status(201).json({message: 'Post submitted'}))
		.catch(error => res.status(500).json({error}))
}
*/


exports.getUserArticles = (req, res) => {
    Article.findAll({ 
        where : { employee_id: req.params.employee_id },
        order: [
            ['date', 'DESC']
          ]
     })
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}

exports.deleteOneArticle = (req, res) => {
	Article.destroy({ where : {article_id: req.params.article_id}})
	.then(() => res.status(200).json({message: 'Post deleted!'}))
	.catch(error => res.status(503).json(error))     
}