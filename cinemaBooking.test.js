const {
    getRandomSeat
} = require('./cinemaBooking');  

describe("test get the random seat number between 1 and 3", () => {
    test("return value <= 3", () => {
      expect(getRandomSeat(1,3)).toBeLessThanOrEqual(3);
    });   

    test("return value >= 1", () => {
        expect(getRandomSeat(1,3)).toBeGreaterThanOrEqual(1);
      });   
      
});
