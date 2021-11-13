function getRandomSeat (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

module.exports = {
    getRandomSeat
};

//console.log(getRandomSeat(1,3));
