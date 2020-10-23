const Sequelize = require('sequelize');
const connection = require('../connection');

const article = connection.define("articles", {
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
	employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
	unread:{
		type: Sequlize.INTEGER,
		allowNull: false
	},
    date: {
        type: Sequelize.DATETIME,
        allowNull: false        
    }
},  {
    timestamps: false
})

module.exports = article