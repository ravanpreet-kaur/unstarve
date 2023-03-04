const { default: sequelize } = require('./conn');
const express = require('express');
const app = express()
const port = process.env.PORT;
const host = '0.0.0.0';
const cors = require('cors')
app.use(cors())
const Restaurants = require('./restaraunts')
var bodyParser = require("body-parser");
const { data } = require('./recommender');
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, host, () => { 
    console.log(`Server started at ${host} port ${port}`);
});