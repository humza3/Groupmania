const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');
//const commentRoutes = require('./routes/comment');

const db = require('./connection')

const app = express();

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});


app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/', articleRoutes);
//app.use('/api/', commentRoutes);


module.exports = app;