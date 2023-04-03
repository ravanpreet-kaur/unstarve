const { distanceCalculator } = require("../helper/calculateDistance");

test('finds distance between (1 , 1) and (0 , 0)' , () => {
    expect(distanceCalculator(1 , 1 , 0 , 0)).toBe(2);
})
