function smallestRange(nums: number[][]): number[] {
    const minHeap = new MinPriorityQueue({ priority: (a) => a[0] })
    let rangeStart = 0;
    let rangeEnd = Infinity;
    let maxNumber = -Infinity;


    for (let num of nums) {
        minHeap.enqueue([num[0], 0, num]);
        maxNumber = Math.max(maxNumber, num[0]);
    }


    while (minHeap.size() == nums.length) {
        let [num, i, list] = minHeap.dequeue().element;

        if (rangeEnd - rangeStart > maxNumber - num) {
            rangeStart = num;
            rangeEnd = maxNumber;
        }

        if (list.length > i + 1) {
            minHeap.enqueue([list[i + 1], i + 1, list]);
            maxNumber = Math.max(maxNumber, list[i + 1]);
        }
    }

    return [rangeStart, rangeEnd];
};