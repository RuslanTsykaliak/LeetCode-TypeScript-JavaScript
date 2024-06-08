function checkSubarraySum(nums: number[], k: number): boolean {
    // Modulo operation on the first element of the array
    nums[0] %= k;

    // Initialize a set to store the cumulative sum of elements modulo k
    const set = new Set([0]);

    // Iterate over the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update the current element to be the cumulative sum of the current and previous element
        nums[i] += nums[i - 1];
        // Perform modulo operation on the updated element
        nums[i] %= k;

        // If the current cumulative sum modulo k is already in the set, it means that there is a subarray
        // whose sum is a multiple of k, so we return true
        if (set.has(nums[i])) return true;

        // Add the previous cumulative sum modulo k to the set
        set.add(nums[i - 1]);
    }

    // If we have checked all elements and found no subarray whose sum is a multiple of k, we return false
    return false;
};