const Sequelize = require('sequelize');
const connection = require('../connection');

const comment = connection.define("comments", {
    message_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
	article_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
	employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        autoIncrement: true
    },
    media: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    },
	unread:{
		type: Sequelize.INTEGER,
		allowNull: false
	}
},  {
    timestamps: false
})

module.exports = comment;