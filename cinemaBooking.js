function getRandomSeat (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const cinemaSeats = [
    {SeatNo:"A1", Booked:"N"},
    {SeatNo:"A2", Booked:"N"},
    {SeatNo:"A3", Booked:"N"},
    {SeatNo:"A4", Booked:"N"},
    {SeatNo:"A5", Booked:"N"},
    {SeatNo:"B1", Booked:"N"},
    {SeatNo:"B2", Booked:"N"},
    {SeatNo:"B3", Booked:"N"},
    {SeatNo:"B4", Booked:"N"},
    {SeatNo:"B5", Booked:"N"},
    {SeatNo:"C1", Booked:"N"},
    {SeatNo:"C2", Booked:"N"},
    {SeatNo:"C3", Booked:"N"},
    {SeatNo:"C4", Booked:"N"},
    {SeatNo:"C5", Booked:"N"}
];

function chkNumOfSeatsLeft() {
    let cnt = 0;
    for (let i=0; i<cinemaSeats.length; i++) {
        if (cinemaSeats[i].Booked=="N") 
            cnt++;
    }
    return cnt;
}

module.exports = {
    getRandomSeat,
    chkNumOfSeatsLeft
};

//console.log(getRandomSeat(1,3));
