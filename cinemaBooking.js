function getRandomSeat (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function test () {
    return true;
}

module.exports = {
    getRandomSeat
};

//console.log(getRandomSeat(1,3));
