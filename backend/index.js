require('dotenv').config()
console.log(process.env)
const { Sequelize } = require("sequelize-cockroachdb");

const sequelize = new Sequelize(process.env.DATABASE_URL);

(async () => {
  try {
    const [results, metadata] = await sequelize.query("CREATE TABLE users (name varchar(255), age integer, phone_number varchar(20),lat float, longit float ,email_id varchar(255),preferences varchar(255)[])");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    await sequelize.close();
  }
})();