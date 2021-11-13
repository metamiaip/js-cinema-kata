const {
    getRandomSeat,
    chkNumOfSeatsLeft
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