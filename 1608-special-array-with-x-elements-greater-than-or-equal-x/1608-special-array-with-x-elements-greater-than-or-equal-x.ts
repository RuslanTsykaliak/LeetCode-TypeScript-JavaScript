function specialArray(nums: number[]): number {
    // We start a loop that goes from 0 to the length of the array.
    for (let i = 0; i <= nums.length; i++) {
        // Initialize a variable count to 0 before the inner for loop. 
        // This will keep track of the number of elements that are greater than or equal to 'i'.
        let count = 0;
        for (let num of nums) {
            // In the inner for loop, increment count each time you find an element that is greater than or equal to 'i'.
            if (num >= i) {
                count++;
            }
        }
        // After the inner for loop, check if count is equal to 'i'. If it is, return 'i'.
        if (count == i) {
            return i;
        }
    }
    // If no such 'i' is found after checking all numbers, we return -1.
    return -1;
}
