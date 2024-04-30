function missingNumber(nums: number[]): number {
    // Get the length of the array
    const n = nums.length;
    // Calculate the sum of numbers from 0 to n using the formula for the sum of an arithmetic series
    const instantsum = (n * (n + 1)) / 2;
    // Calculate the actual sum of the numbers in the array
    const actualsum = nums.reduce((sum, num) => sum + num, 0);
    // The missing number is the difference between the expected sum and the actual sum
    return instantsum - actualsum;
};
