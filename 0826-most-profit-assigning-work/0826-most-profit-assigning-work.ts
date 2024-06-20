function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    let jobs = [], i = 0, total = 0, best = 0;
    for (let i = 0; i < difficulty.length; i++) jobs[i] = [difficulty[i], profit[i]];

    jobs.sort((a, b) => a[0] - b[0]);
    worker.sort((a, b) => a - b);

    for (let ability of worker) {
        while (i < jobs.length && ability >= jobs[i][0]) {
            best = Math.max(best, jobs[i++][1]);
        }
        total += best;
    }
    return total;
};