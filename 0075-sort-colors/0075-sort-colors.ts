/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // Initialize three pointers: 'current' to traverse the array, 'low' to track the position for 0s, and 'high' to track the position for 2s
    let current = 0, low = 0, high = nums.length - 1;

    // Loop until the 'current' pointer surpasses the 'high' pointer
    while (current <= high) {
        // If the current element is 0, swap it with the element at 'low', then increment both 'current' and 'low'
        if (nums[current] === 0) [nums[current++], nums[low++]] = [nums[low], nums[current]];
        // If the current element is 2, swap it with the element at 'high', then decrement 'high' without incrementing 'current'
        else if (nums[current] === 2) [nums[current], nums[high--]] = [nums[high], nums[current]];
        // If the current element is 1, just move the 'current' pointer to the next element
        else current++;
    }
};