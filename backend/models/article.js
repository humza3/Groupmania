const Sequelize = require("sequelize");
const connection = require("../connection");

const article = connection.define("article", {
    article_id: {
        type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
		allowNull: false,
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
	}
},  {
    timestamps: false
})

module.exports = article