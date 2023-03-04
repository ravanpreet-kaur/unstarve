require('dotenv').config()
console.log(process.env)
const { Sequelize } = require("sequelize-cockroachdb");
var f = require('./recommender')
const sequelize = new Sequelize(process.env.DATABASE_URL);

(async () => {
  try {
    const [results, metadata] = await sequelize.query("select now()");
    for(x in f.data){
      console.log(x)
    }
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    await sequelize.close();
  }
})();