function minGroups(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0])
    let pq = new MinPriorityQueue({ priority: (a) => a[1] })

    for (let interval of intervals) {
        if (pq.size() == 0) pq.enqueue(interval)
        else {
            let topInterval = pq.front().element
            if (topInterval[1] >= interval[0]) pq.enqueue(interval)
            else {
                let newInterval = [Math.min(interval[0], topInterval[0]), Math.max(interval[1], topInterval[1])]
                pq.dequeue()

                pq.enqueue(newInterval)
            }
        }
    }
    return pq.size()
};