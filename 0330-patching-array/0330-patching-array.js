/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let x = 1, patches = 0, i = 0;  // Initialize x to 1, patches to 0, and i to 0.
    while (x <= n) {     // Loop until x exceeds n
        if (i < nums.length && nums[i] <= x) x += nums[i++]; // If the current number in nums can be used to extend the range add nums[i] to x and move to the next number
        else x += x, patches++; // If the current number cannot be used or we've run out of numbers in the array
    }
    return patches;  // Return the total number of patches added
};