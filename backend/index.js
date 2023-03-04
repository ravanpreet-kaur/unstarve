require('dotenv').config()
console.log(process.env)
const { Sequelize } = require("sequelize-cockroachdb");

const sequelize = new Sequelize(process.env.DATABASE_URL);

(async () => {
  try {
    const [results, metadata] = await sequelize.query("Show tables");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    await sequelize.close();
  }
})();