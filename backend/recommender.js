const fs = require("fs")
const { parse } = require("csv-parse")
fs.createReadStream("D://one.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
})
var data = fs
module.exports = {data}
