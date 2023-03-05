const express = require('express')
const { Restaurants } = require('../restaraunts')
const routerRestaurant = express.Router()

routerRestaurant.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
routerRestaurant.get('/' , async (req , res) => {
    const fin = await Restaurants.findAll();
    res.send(fin)
})
module.exports = routerRestaurant


