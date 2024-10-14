const heapFix = (heap: number[]): void => {
    let i = 0;
    while (true) {
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        let target = i;
        if (l < heap.length && heap[l] > heap[target]) target = l;
        if (r < heap.length && heap[r] > heap[target]) target = r;
        if (target === i) break;
        const tmp = heap[i];
        heap[i] = heap[target];
        heap[target] = tmp;
        i = target;
    }
};
function maxKelements(nums: number[], k: number): number {
    let score = 0;
    nums.sort((a, b) => b - a);
    for (; k > 0; k--) {
        score += nums[0];
        nums[0] = Math.ceil(nums[0] / 3);
        heapFix(nums);
    }
    return score;
}