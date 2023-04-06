const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const user = sequelize.define("User",{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : Sequelize.STRING
});

module.exports = user