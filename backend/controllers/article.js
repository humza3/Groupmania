const Article = require('../models/article');
const user = require('../models/user');
const comment = require('../models/comment');

exports.createArticle = async (req, res) => {
	const artResults = new Article({
		content: req.body.content,
		title: req.body.title,
		link: req.body.link,
		employee_id: req.body.employee_id,
	});
	console.log("create article: ", artResults);
	artResults.save().then(
		() => {
			res.status(201).json({
			message: 'Post added successfully!'
			//create article table
		  });
		}
	).catch(
		(error) => {
			console.log("first 500");
			res.status(500).json({
				error: error
			});			  
		}
	);
};

exports.getAllArticles = (req, res) => {
	console.log("find all controller");
    Article.findAll({order: [
        ['createdAt', 'DESC']
      ]})
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}


exports.getOneArticle = (req, res) => {
    Article.findOne({ where: {article_id: req.params.article_id}})
    .then((article) => res.status(200).json({article}))
    .catch((error) => res.status(503).json({error}))
}

exports.getLastArticles = (req, res) => {	
    Article.findAll({ 
        where : { employee_id: req.params.employee_id },
        order: [
            ['createdAt', 'DESC']
		],	
		limit: 5
     })
    .then((articles) => res.status(200).json({articles}))
    .catch((error) => res.status(503).json({error}))
}

exports.deleteArticle = (req, res) => {
	Article.destroy({ where : {article_id: req.params.article_id}})
	.then(() => res.status(200).json({message: 'Post deleted!'}))
	.catch(error => res.status(503).json(error))     
}