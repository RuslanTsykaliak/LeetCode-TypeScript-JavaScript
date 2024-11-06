function canSortArray(nums: number[]): boolean {
    const binary = nums.reduce((pre, num) => ({ ...pre, [num]: num.toString(2).match(/1/g)?.length ?? 0 }), {})

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                if (binary[nums[j]] == binary[nums[j + 1]]) {
                    const tmp = nums[j]
                    nums[j] = nums[j + 1]
                    nums[j + 1] = tmp
                } else return false
            }
        }
    }

    return true
};