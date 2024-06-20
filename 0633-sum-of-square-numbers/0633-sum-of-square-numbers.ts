function judgeSquareSum(c: number): boolean {
    // Iterate over possible values of 'a'. Start from 0 and go up to sqrt(c).
    for (let a = 0; a * a <= c; a++) {
        // Calculate 'b' as the square root of (c - a^2).
        const b = Math.sqrt(c - a * a);

        // Check if 'b' is an integer. If 'b' is an integer, it means that a^2 + b^2 equals 'c'.
        // We check this by comparing 'b' with the largest integer not greater than 'b' (i.e., floor(b)).
        // If they are equal, 'b' is an integer.
        if (b === Math.floor(b)) {
            // If such 'a' and 'b' are found, return true.
            return true;
        }
    }

    // If no such 'a' and 'b' are found after checking all possible 'a' values, return false.
    return false;
};
