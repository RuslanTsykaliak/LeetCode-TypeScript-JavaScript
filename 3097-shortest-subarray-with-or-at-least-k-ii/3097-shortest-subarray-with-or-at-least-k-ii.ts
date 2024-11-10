function minimumSubarrayLength(nums: number[], k: number): number {
    const tree = new OrTree(nums);

    let left = 0;
    let minLen = nums.length + 1;
    for (let right = 1; right <= nums.length; ++right) {
        while (left < right && tree.query(left, right) >= k) {
            minLen = Math.min(minLen, right - left);
            ++left;
        }
    }

    return minLen <= nums.length ? minLen : -1;
}


class OrTree {
    private _min: number;
    private _vals: number[];

    constructor(nums: number[]) {
        const N = nums.length;
        const MIN = 1 << Math.ceil(Math.log2(N));
        const vals = new Array(MIN + N).fill(0);

        for (let i = 0; i < N; ++i) {
            vals[i + MIN] = nums[i];
        }
        for (let i = MIN + N - 1; i > 1; --i) {
            vals[i >> 1] |= vals[i];
        }

        this._min = MIN;
        this._vals = vals;
    }

    query(left: number, right: number): number {
        left += this._min;
        right += this._min;

        let val = 0;
        while (left < right) {
            val |= (left & 1) ? this._vals[left++] : 0;
            val |= (right & 1) ? this._vals[--right] : 0;
            left >>= 1;
            right >>= 1;
        }

        return val;
    }
}