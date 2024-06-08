function checkSubarraySum(nums: number[], k: number): boolean {
    // Initialize the cumulative sum
    let sum = 0;
    // Initialize a map to store the cumulative sum and its corresponding index
    let map = new Map([[0, -1]]);

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // Update the cumulative sum
        sum += nums[i];
        // If k is not zero, update the cumulative sum to be its remainder when divided by k
        if (k != 0) sum = sum % k;
        // if the current cumulative sum is already in the map, it means that there is a subarray
        // whose sum is a multiple of k, so we return true
        if (map.has(sum)) {
            // The subarray should have at least two elements, so we check if the current index
            // is greater than the index where the same cumulative sum was found plus one
            if (i - map.get(sum) > 1) return true;
        } else {
            // If the current cumulative sum is not in the map, we add it to the map
            map.set(sum, i);
        }
    }
    // If we have checked all elements and found no subarray whose is a multiple of k, we return false
    return false;
};
