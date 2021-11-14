const {
    getRandomSeat,
    chkNumOfSeatsLeft,
    bookSeats,
    checkSeat
} = require('./cinemaBooking');  

describe("test get the random seat number between 1 and 3", () => {
    test("return value <= 3", () => {
      expect(getRandomSeat(1,3)).toBeLessThanOrEqual(3);
    });   

    test("return value >= 1", () => {
        expect(getRandomSeat(1,3)).toBeGreaterThanOrEqual(1);
      });   
      
});

describe("check number of seats left in the cinema", () => {
  test("return 15 seats", () => {
    expect(chkNumOfSeatsLeft()).toBe(15);
  });     
});

describe("book seat by passing a number of seats", () => {
  test("book for 3 seats and return seats A1,A2,A3 in array", () => {
    expect(bookSeats(3)).toEqual(['A1','A2','A3']);
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
