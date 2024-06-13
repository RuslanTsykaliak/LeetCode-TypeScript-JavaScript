/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    // Sort the seats array in ascending order
    seats.sort((a, b) => a - b);

    // Sort the students array in ascending order
    students.sort((a, b) => a - b);

    // Use the reduce method to calculate the total number of moves
    return seats.reduce((moves, seat, i) =>
        // For each seat, add the absolute difference between the seat position and the corresponding student position to the total moves
        moves + Math.abs(seat - students[i]),
        0 // Initial value of moves is 0
    );
};