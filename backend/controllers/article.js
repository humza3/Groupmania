const Article = require('../models/article');
const user = require('../models/user');
const comment = require('../models/comment');

exports.createArticle = async (req, res) => {
	try {
		await Article.create({
			content: req.body.content,
			title: req.body.title,
			link: req.body.link,
			employee_id: req.body.employee_id,
		});
		console.log(Article);
		Article.save().then(
			() => {
			  res.status(201).json({
				message: 'Post added successfully!'
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
	} catch (e) {
		return res.status(500).send(e);
  }
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

exports.deleteArticle = (req, res) => {
	Article.destroy({ where : {article_id: req.params.article_id}})
	.then(() => res.status(200).json({message: 'Post deleted!'}))
	.catch(error => res.status(503).json(error))     
}