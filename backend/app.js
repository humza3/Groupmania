const express = require('express');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const userRoutes = require('./routes/user');

const app = express();

const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     password: 'password',
	 connectionLimit: 5,
     database: 'groupmania'
});
async function asyncFunction() {
  let conn;
  try {	  
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * FROM users", function(error, rows, fields) {
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
  } finally {
	if (conn) return conn.end();
  }
}
asyncFunction();
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});


app.use(bodyParser.json());

module.exports = app;