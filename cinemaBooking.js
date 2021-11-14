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

function cinemaBooking(seatsArr) {
    let seatLeft = chkNumOfSeatsLeft(seatsArr);
    let curBooking = 0;
    let errMsg = "";
    while (seatLeft > 0) {
        console.log(`Total seats left: ${seatLeft}`);
        curBooking = getRandomSeat(minSeat,maxSeat);
        console.log(`Book seats=${curBooking}`);
        
        if (checkSeat(seatLeft,curBooking)) {
            console.log(`Seats allocated=${bookSeats(seatsArr,curBooking)}`);
            seatLeft=seatLeft-curBooking;
        }
        else {
            errMsg="Error! Insufficient seats for allocation!\nSystem stopped!";
            console.log(errMsg);
            break;
        }
    }
    return (errMsg=="");
}

module.exports = {
    getRandomSeat,
    chkNumOfSeatsLeft,
    bookSeats,
    checkSeat,
    cinemaBooking
};

//console.log(getRandomSeat(1,3));
//console.log(bookSeats(3));
console.log(cinemaBooking(cinemaSeats));