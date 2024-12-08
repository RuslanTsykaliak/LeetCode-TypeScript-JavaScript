function maxTwoEvents(events: number[][]): number {
    // sort by start
    events.sort((a, b) => a[0] - b[0])
    events.push([Infinity, Infinity, 0])
    let best = -Infinity

    for (let i = events.length - 2; i >= 0; i--) {
        const [start, end, value] = events[i]

        // set max possible value from this startTime forward
        if (value < events[i + 1][2]) {
            events[i][2] = events[i + 1][2]
        }

        // search forward for the first startTime > end
        let left = i + 1
        let right = events.length - 1

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)

            const midStart = events[mid][0]
            if (midStart >= end + 1) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        best = Math.max(best, value + events[left][2])
    }

    return best
};