function checkSubarraySum(nums: number[], k: number): boolean {
    const map: Map<number, number> = new Map();
    let sum: number = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const remainder = sum % k;
        // If the remainder already exists then we've found the subset
        if (map.has(remainder)) {
            const length: number = i - map.get(remainder);
            if (length >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }
    return false;
};