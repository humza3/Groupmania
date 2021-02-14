const Sequelize = require("sequelize");
const connection = require("../connection");

const article = connection.define("articles", {
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
	title: { 
        type: Sequelize.STRING,
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
	createdAt: {
      type: Sequelize.DATE,
	  defaultValue: Sequelize.NOW,
      allowNull: false,
	}, 
	updatedAt: {
	  type: Sequelize.DATE,
	  defaultValue: Sequelize.NOW,
      allowNull: false,
	}
});


module.exports = article