function countMaxOrSubsets(nums: number[]): number {
    let map: Map<number, number> = new Map();
    let max = -1;

    bt(0, []);
    return max;

    function bt(index: number, subset: number[]) {
        if (index == nums.length) {

            let totalOr = 0;
            for (let num of subset)
                totalOr |= num;

            map.set(totalOr, (map.get(totalOr) || 0) + 1)
            max = Math.max(max, map.get(totalOr));
            return;
        }

        subset.push(nums[index]);
        bt(index + 1, subset);
        subset.pop();
        bt(index + 1, subset);
    }
};