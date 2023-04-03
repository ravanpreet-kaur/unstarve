const { giveSum } = require('../helper/sum.js');
test('check sum of array' , () => {
  expect(giveSum([1 , 2 , 3])).toBe(6)   
});
