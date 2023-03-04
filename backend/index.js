require('dotenv').config()
console.log(process.env)
const { Sequelize } = require("sequelize-cockroachdb");

const sequelize = new Sequelize("postgresql://pixelate:ylNTnKYgVecUL_W0ULRSaQ@bigear-narwhal-2447.7s5.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
  try {
    const [results, metadata] = await sequelize.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    await sequelize.close();
  }
})();