function slidingPuzzle(board: number[][]): number {

    let result = Number.MAX_SAFE_INTEGER; // Result
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Four Directions 

    // Function to check the puzzle is solved or not
    var isPuzzleSolved = function (board) {
        let puzzleValue = 1;

        for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 3; col++) {
                if (row == 1 && col == 2) continue; // No need to check the 0th position
                if (board[row][col] != puzzleValue++) return false;
            }
        }

        return true; // Puzzle is solved
    }

    // Function to Swap the puzzle pieces 
    var swapPuzzlePiece = function (board, first, second) {
        let temp = board[first[0]][first[1]];

        board[first[0]][first[1]] = board[second[0]][second[1]];
        board[second[0]][second[1]] = temp;
    }

    var helper_backtrack = function (board, moves, previous, current) {
        if (moves >= 20) return; // More than 20 moves is kind of loop in 2*3 Matrix

        if (isPuzzleSolved(board)) {
            result = Math.min(result, moves);
            return; // Puzzle is solved
        }

        for (let dir of directions) {
            let row = current[0] + dir[0];
            let col = current[1] + dir[1];

            /* Check if the row and column lies in the range and 
                should not be same as previous row and column : (it creates loop) */
            if (row < 0 || row >= 2 || col < 0 || col >= 3 || (previous[0] == row && previous[1] == col)) {
                continue;
            }

            let newMove = [row, col];

            swapPuzzlePiece(board, current, newMove); // Swap the puzzle pieces
            helper_backtrack(board, moves + 1, current, newMove); // Recursion
            swapPuzzlePiece(board, current, newMove); // Backtracking

        }
    }

    let zero = [-1, -1]; // To store the position of zero(0)

    for (let row = 0; row < 2; row++) { // Find the Zero
        for (let col = 0; col < 3; col++) {
            if (board[row][col] == 0) {
                zero = [row, col];
                break;
            }
        }
    }

    helper_backtrack(board, 0, [-1, -1], zero);

    // return -1 if no Possible way to solve the puzzle
    return (result == Number.MAX_SAFE_INTEGER) ? -1 : result;
};