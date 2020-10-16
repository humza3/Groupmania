const Sequelize = require('sequelize');
const connection = require('../connection');

const comment = connection.define("comments", {
    message_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
	employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    media: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
	unread:{
		type: Sequlize.INTEGER,
		allowNull: false
	}
},  {
    timestamps: false
})

module.exports = comment;