const {
    getRandomSeat,
    chkNumOfSeatsLeft,
    bookSeats,
    checkSeat,
    cinemaBooking
} = require('./cinemaBooking');  

afterEach(() => {
  jest.clearAllMocks();
});

describe("test get the random seat number between 1 and 3", () => {
    test("return value <= 3", () => {
      expect(getRandomSeat(1,3)).toBeLessThanOrEqual(3);
    });   

    test("return value >= 1", () => {
        expect(getRandomSeat(1,3)).toBeGreaterThanOrEqual(1);
      });   
      
});

describe("check number of seats left in the cinema", () => {
  const seatsSet1 = [
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

  test("return 15 seats", () => {
    expect(chkNumOfSeatsLeft(seatsSet1)).toBe(15);
  });     
});

describe("book seat by passing a number of seats", () => {
  test("book for 3 seats and return seats A1,A2,A3 in array", () => {
    const seatsSet2 = [
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
    
    expect(bookSeats(seatsSet2,3)).toEqual(['A1','A2','A3']);
  });     
});

describe("check whether seats are available", () => {
  test("return true if seats available", () => {
    expect(checkSeat(15,2)).toBe(true);
  });     

  test("return false if seats are not available", () => {
    expect(checkSeat(1,2)).toBe(false);
  }); 
});

jest.mock('./cinemaBooking.js', () => ({
  ...jest.requireActual('./cinemaBooking.js'),
  getRandomSeat: jest.fn().mockReturnValue(3),
}));

describe("check whether seats are available", () => {
  test('always generate random seats to 3 and prompt up success at last', () => {
    const seatsSet3 = [
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

    expect(cinemaBooking(seatsSet3)).toBe("Success");
  });
});

describe("check whether seats are available", () => {
  test('always generate random seats to 2 and prompt up error at last', () => {
    const seatsSet4 = [
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

    getRandomSeat.mockReturnValue(2);
    expect(cinemaBooking(seatsSet4)).toBe("Error");
  });
});

describe("use parameterisation to test cinemaBooking function", () => {
  test.each([
    [3,'Success'],
    [2, 'Error']
  ])('control the return value of random seat to test cinemaBooking function', (val, expected) => {
    const seatsSet5 = [
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
    getRandomSeat.mockReturnValue(val);
    expect(cinemaBooking(seatsSet5)).toBe(expected);
  });
});

