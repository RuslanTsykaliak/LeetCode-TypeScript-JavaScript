function findMinDifference(timePoints: string[]): number {

    timePoints.sort()
    const parsed = timePoints.map(time => parse(time))

    parsed.push(parsed[0] + 1440)

    let min = Infinity

    for (let i = 1; i < parsed.length; i++) {
        min = Math.min(min, parsed[i] - parsed[i - 1])
    }

    return min
};

function parse(s: string) {

    const parsed = s.split(':')

    const hour = parseInt(parsed[0])
    const minute = parseInt(parsed[1])

    return hour * 60 + minute
}