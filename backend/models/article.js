const Sequelize = require('sequelize');
const connection = require('../connection');

const article = connection.define("article", {
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
	employee_id: {
        type: Sequelize.INTEGER,
		allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
	unread:{
		type: Sequelize.INTEGER,
		allowNull: false
	},
    date: {
        type: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false        
    }
},  {
    timestamps: false
})

module.exports = article