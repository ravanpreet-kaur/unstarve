const { sequelize } = require('./conn');
const express = require('express');
const app = express()
const port = process.env.PORT;
const host = '0.0.0.0';
const cors = require('cors')
app.use(cors())
app.use(express.json())
const Restaurants = require('./restaraunts')
var bodyParser = require("body-parser");
app.use(bodyParser.json())
const { data } = require('./recommender');
const routerRestaurant = require('./controller/restaurantHandler');
const { getUser, addUser } = require('./controller/userHandler');
const { NLP } = require('./helper/cohere');
const { createOrder } = require('./controller/orderHandler');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/suggestion' , NLP)
app.get('/user/get/:id' , getUser)
app.post('/user/add' , addUser)
app.use('/restaurants' , routerRestaurant)
app.post('/order/new/' , createOrder)
app.get('/suggestion/:prompt' , NLP)
app.listen(port, host, () => { 
    console.log(`Server started at ${host} port ${port}`);
});