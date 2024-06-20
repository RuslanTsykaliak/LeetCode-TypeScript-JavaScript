/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    // Initialize variables
    let jobs = [], i = 0, total = 0, best = 0;

    // Create a new array 'jobs' where each job is represented as a pair [difficulty, profit]
    for (let i = 0; i < difficulty.length; i++) jobs[i] = [difficulty[i], profit[i]];

    // Sort 'jobs' by difficulty in ascending order
    jobs.sort((a, b) => a[0] - b[0]);

    // Sort 'worker' by ability in ascending order
    worker.sort((a, b) => a - b);

    // Iterate over each worker
    for (let ability of worker) {
        // Find the best job that this worker can do
        while (i < jobs.length && ability >= jobs[i][0]) {
            // Update 'best' if the current job's profit is better than the current best
            best = Math.max(best, jobs[i++][1]);
        }

        // Add the best profit that this worker can get to the total profit
        total += best;
    }

    // Return the total profit
    return total;
};