const Sequelize = require('sequelize');
const connection = require('../connection');

const readmessages = connection.define("readmessages", {
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
	employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},  {
    timestamps: false
})

module.exports = readmessages;