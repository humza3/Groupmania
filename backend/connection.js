const Sequelize = require('sequelize');

const connection = new Sequelize('groupmania', 'root', 'password', { dialect: 'mysql'});

async function testingConnection() {
  try {	  
	const rows = await connection.query("SELECT * FROM users", 
	function(error, rows, fields) {
		if(!!error) {
			console.log('Error in query');
		} else {
			//parse with your rows and fields
			console.log('successful query');
		}
	});
  } catch (err) {
	console.log('Unable to connect to MariaDB!');
	console.log(err);
	throw err;
  } 
}
testingConnection();
module.exports = connection;