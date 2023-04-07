const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const product = sequelize.define("product",{
    id : {
        autoIncrement : true,
        allowNull : false,
        primaryKey : true,
        type : Sequelize.INTEGER
    },
    name : {
        allowNull : false,
        type : Sequelize.STRING
    },
    price : {
        allowNull : false,
        type : Sequelize.DOUBLE
    }
});

module.exports = product;