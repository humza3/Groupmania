const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
	console.log("token", token);
	console.log("authorization header", req.headers.authorization);
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
	console.log("decodedToken", decodedToken);
    const employee_id = decodedToken.employee_id;
	console.log("employee_id", employee_id);
	console.log("req.body.employee_id", req.body.employee_id);
	//let employee_id_requested = parseInt(req.body.employee_id);
    if (req.body.employee_id && req.body.employee_id !== employee_id) {
      throw 'Invalid user ID';
    } else {
		console.log("controller next");
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};