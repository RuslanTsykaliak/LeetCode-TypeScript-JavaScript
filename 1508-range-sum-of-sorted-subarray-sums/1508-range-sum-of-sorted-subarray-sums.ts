function rangeSum(nums: number[], n: number, left: number, right: number): number {
    let arr = Array((n * (n + 1)) / 2).fill(0), res = 0
    const mod = 10 ** 9 + 7

    for (let i = 0, sum = 0, k = 0; i < n; i++, sum = 0) {
        for (let j = i; j < n; j++, k++) {
            sum += nums[j]
            arr[k] = sum
        }
    }

    arr = arr.sort((a, b) => a - b).slice(left - 1, right)
    for (const x of arr) {
        res += x
    }
    return res % mod
};