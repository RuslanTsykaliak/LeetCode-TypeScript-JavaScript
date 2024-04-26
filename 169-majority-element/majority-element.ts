function majorityElement(nums: number[]): number {
    let res = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            res = nums[i];
            // count = 1;
        }
        if (nums[i] === res) {
            count += 1;
        } else {
            count -= 1;

            if (count < 0) {
                res = nums[i];
                count = 1;
            }
        }
    }

    return res;
};