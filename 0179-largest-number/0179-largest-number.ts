function largestNumber(nums: number[]): string {
    const res = nums
        .map(String)
        .sort((a, b) => {
            return a.concat(b) > b.concat(a) ? -1 : 1;
        })
        .join('');

    return res.charAt(0) === '0' ? '0' : res;
}