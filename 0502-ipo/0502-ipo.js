/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    // Create a list of projects, each represented as a pair of profit and required capital, sorted by required capital.
    let projectList = profits.map((profit, index) => [profit, capital[index]]).sort((a, b) => a[1] - b[1]);

    // Create a priority queue of projects, prioritized by profit.
    let profitPriorityQueue = new MaxPriorityQueue({ priority: (x) => x });

    // Initialize the index of the current project being considered.
    let currentProjectIndex = 0;

    // Iterate over the projects.
    for (let i = 0; i < k; i++) {
        // Add any projects that can be started to the priority queue.
        while (currentProjectIndex < projectList.length && projectList[currentProjectIndex][1] <= w) {
            profitPriorityQueue.enqueue(projectList[currentProjectIndex][0]);
            currentProjectIndex++;
        }

        // If there are no more projects that can be started, break the loop.
        if (profitPriorityQueue.isEmpty()) break;

        // Start the project with the highest profit from those in the queue, and add its profit to the capital.
        w += profitPriorityQueue.dequeue().element;
    }

    // Return the final capital.
    return w;
};