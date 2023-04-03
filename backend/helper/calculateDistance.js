function distanceCalculator(lat1, lon1, lat2, lon2){
    return Math.abs(lat1 - lat2) + Math.abs(lon1 - lon2);
}

module.exports = {distanceCalculator};