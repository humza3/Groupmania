const Sequelize = require('sequelize');
const connection = require('../connection');

const readmessages = connection.define("readmessages", {
	messages_id:	{
        type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
        primaryKey: true,
        allowNull: false,
		autoIncrement: true
    },
    article_id: {
        type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
        allowNull: false
    },
	employee_id: {
        type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
        allowNull: false
    }
},  {
    timestamps: false
})

module.exports = readmessages;