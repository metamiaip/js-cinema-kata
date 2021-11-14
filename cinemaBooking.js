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

const minSeat = 1;
const maxSeat = 3;

function getRandomSeat (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function chkNumOfSeatsLeft(seatsArr) {
    let cnt = 0;
    for (let i=0; i<seatsArr.length; i++) {
        if (seatsArr[i].Booked=="N") 
            cnt++;
    }
    return cnt;
}

function bookSeats(seatsArr,numOfSeats) {
    const bookedArr = [];
    let totalSeat = numOfSeats;
    
    for (let i=0; i<seatsArr.length; i++) {
        if (totalSeat>0) {
            if (seatsArr[i].Booked=="N") {
                seatsArr[i].Booked="Y";
                bookedArr.push(seatsArr[i].SeatNo);
                totalSeat--;
            }       
        }
    }
    
    return bookedArr;
}

function checkSeat(totalSeats,bookSeats) {
    return (totalSeats >= bookSeats);
}

module.exports = {
    getRandomSeat,
    chkNumOfSeatsLeft,
    bookSeats,
    checkSeat
};

//console.log(getRandomSeat(1,3));
//console.log(bookSeats(3));
//cinemaBooking();
