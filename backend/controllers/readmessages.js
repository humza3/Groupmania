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
			console.log("first 500");
			res.status(500).json({
				error: error
			});			  
		}
	);
};