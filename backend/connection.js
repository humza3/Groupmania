const Sequelize = require('sequelize');

const connection = new Sequelize('groupmania', 'root', 'password', { dialect: 'mariadb'});

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
	console.log('Successfully connected to MariaDB!');
	console.log(rows); //[ {val: 1}, meta: ... ]
  } catch (err) {
	console.log('Unable to connect to MariaDB!');
	console.log(err);
	throw err;
  } 
}
testingConnection();
module.exports = connection;