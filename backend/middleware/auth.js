const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	console.log("auth");
	try {
		const token = req.headers["authorization"];
		console.log("token: ",  token);

	if (!token) {
		return res.status(403).send({
			message: "No token provided!"
		});
	}

	jwt.verify(token, 'RANDOM_TOKEN_SECRET', (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: 'Unauthorized!'
			});
		}
		req.employee_id = decoded.id;
		next();
	})
	} catch {
		res.status(401).json({
			error: new Error('Invalid request!')
		});
	}
};