const MAX_N = 100000;
const bit = new Array(MAX_N + 1).fill(0);

const psum = (i: number): number => {
    let sum = 0;
    for (i++; i > 0; i -= i & -i) sum += bit[i];
    return sum;
};

const add = (i: number, val: number): void => {
    for (i++; i <= MAX_N; i += i & -i) bit[i] += val;
};

const isPeak = (nums: number[], i: number): boolean => i > 0 && i < nums.length - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1];

function countOfPeaks(nums: number[], queries: number[][]): number[] {
    const n = nums.length;
    for (let i = 1; i < n - 1; i++) if (isPeak(nums, i)) add(i, 1);

    const res: number[] = [];
    for (const [type, x, y] of queries) {
        if (type === 1) {
            res.push(psum(y - 1) - psum(x));
        } else {
            for (let i = x - 1; i <= x + 1; i++) {
                if (i > 0 && i < n - 1 && isPeak(nums, i)) add(i, -1);
            }
            nums[x] = y;
            for (let i = x - 1; i <= x + 1; i++) {
                if (i > 0 && i < n - 1 && isPeak(nums, i)) add(i, 1);
            }
        }
    }
    return res;
}
