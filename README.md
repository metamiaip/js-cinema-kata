# js-cinema-kata

Cinema Seat Booking Kata

How to run:
* in command prompt, type:
  node cinemaBooking.js
  or if you want to keep the running result, please type:
  node cinemaBooking.js > result.txt (see example result.txt in github)
* to call it externally, please provide the array of json object in the following format to represent the seats in the cinema:
  const cinemaSeats = [

    {SeatNo:"A1", Booked:"N"}, ...]

<br>    
Result:
* program will print out the whole booking process until no more seats available and stopped.
<br>
Assumptions:
1. minimum seat for each booking = 1
2. maximum seat for each booking = 3
3. 15 seats available at the beginning of the booking process
4. program will generate random seats (1 to 3) and try to book the seats if available until there is no more seats or seats left is not enough for current booking
<br>
Approaches:
1. use jest to build test case for this project.
2. define the cinema seats in an array of json object for each seats with two keys in each object, SeatNo and Booked.
3. build getRandomSeat function to return random number from 1 to 3
4. in order to check how many seats left in the cinema, build chkNumOfSeatsLeft function to perform this
5. to update the seats array of json object, build bookSeats function to update the Booked value of json object from N to Y and return the SeatNo key for display
6. to determine whether next booking can be go on, build checkSeat to ensure seats available is sufficient for next booking
7. finally, build cinemaBooking to perform the core booking process, if all seats is booked then return true, if not, return false
<br>
Functionality:
1.getRandomSeat
* return the random seats number from 1 to 3
2.chkNumOfSeatsLeft
* return how many seats still available for booking (max:15, min:0)
3.bookSeats
* perform book seat process based on no. of seats to book and update the array of json objects Booked value for the next available seats
4.checkSeat
* return false when total no. of seats left is less than the pass-in no. of seats to book
* return true when total no. of seats left is enough for next booking
5.cinemaBooking
* receive array of seats available as pass-in parameter and perform auto booking process until no more seats available for booking
<br>
Problems:
1. when using jest.mock function to mock getRandomSeat, it is fine.
2. when using jest.mock to mock getRandomSeat before calling cinemaBooking, it doesn't work properly.
search from google and got the following information:
https://stackoverflow.com/questions/51269431/jest-mock-inner-function
so in cinemaBooking.test.js, from line 90 to 190, code commented as it does not work properly.
If Kim or James got any idea on doing this, please let me know.
<br>
Future thoughts:
1. build a function to dynamic generate the array of seat json object
2. extend the program with more than one cinema, json object might need extra key value pair to hold the cinema id
3. can use a database to store cinema booking information (tables: cinema, seats, booking, etc)
4. can use the saved data to build reports (e.g. monthly revenue report, which movie is famous and so on)
5. can base on the customer booking transaction to know more about which category of movie can be recommended to the customer next time to increase revenue
