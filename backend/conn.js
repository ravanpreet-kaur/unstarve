require('dotenv').config()
const { Sequelize } = require("sequelize-cockroachdb");
const sequelize = new Sequelize(process.env.DATABASE_URL);
exports.sequelize = sequelize;