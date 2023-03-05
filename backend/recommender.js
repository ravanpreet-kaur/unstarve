const fs = require("fs")
const { parse } = require("csv-parse")
const { Restaurants } = require("./restaraunts")

fs.createReadStream("D://one.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    try{
     if(!Restaurants.findByPk(parseInt(row[0])))Restaurants.create({rid : parseInt(row[0]) ,name : row[1] , latitude : parseFloat(row[2]) , longitude : parseFloat(row[3]) , cuisine : row[4] , price : parseInt(row[5])})
    }
    catch(err){
      console.log(err)
    }
})
var data = fs
module.exports = {data}
