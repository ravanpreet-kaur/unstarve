const { Sequelize } = require("sequelize-cockroachdb");
const { sequelize } = require("../conn");

const Restaurants = sequelize.define('Restaurants' , {
    rid : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    name : Sequelize.STRING,
    latitude : Sequelize.FLOAT,
    longitude : Sequelize.FLOAT,
    cuisine : Sequelize.STRING,
    price : Sequelize.INTEGER
});
Restaurants.sync()
exports.Restaurants = Restaurants
