const { distanceCalculator } = require("../helper/calculateDistance");

test('finds distance between Chandigarh and Mumbai' , () => {
    expect(distanceCalculator(1 , 1 , 0 , 0)).toBe(2);
})