function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.sort((a, b) => a - b);
    let ans = 0;
  
    for (let i = 0; i < nums.length - 1; i++) {
        const low = lowerBound(nums, lower - nums[i], i + 1);
        const up = upperBound(nums, upper - nums[i], i + 1);
        ans += up - low;
    }
    return ans;
};

function lowerBound(nums, target, start) {
    let end = nums.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return start;
}

function upperBound(nums, target, start) {
    let end = nums.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > target) end = mid;
        else start = mid + 1;
    }
    return start;
}