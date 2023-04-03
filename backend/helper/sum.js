function giveSum(ar){
  var res = 0;
  ar.forEach(x => {
    res = res + parseInt(x);
  });
  return res;
}
module.exports = {giveSum}

