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
        type: Sequelize.INTEGER(11).UNSIGNED.ZEROFILL,
		allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    link: {
      type: Sequelize.STRING(150),
      allowNull: true,
    },
	date: {
      type: Sequelize.DATE,
	  defaultValue: Sequelize.NOW,
      allowNull: false,
	}, 
});


module.exports = article