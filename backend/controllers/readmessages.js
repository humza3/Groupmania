const readmessagesmodel = require('../models/readmessages');

exports.readmessage = async (req, res) => {
	const read = new readmessagesmodel({
		article_id: req.body.article_id,
		employee_id: req.params.employee_id
	});
	console.log("read message: ", read);
	read.save().then(
		() => {
			res.status(201).json({
			message: 'read messages added successfully!'
			//create article table
		  });
		}
	).catch(
		(error) => {
			console.log("first 500 FROM READ MESSAGES");
			res.status(500).json({
				error: error
			});			  
		}
	);
};

exports.getOneReadmessage = (req, res) => {
    readmessagesmodel.findAll({ where: {employee_id: req.params.employee_id}})
    .then((readmessages) => res.status(200).json({readmessages}))
    .catch((error) => res.status(503).json({error}))
}