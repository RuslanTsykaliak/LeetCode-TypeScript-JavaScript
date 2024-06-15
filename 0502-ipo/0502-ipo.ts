function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    let projectList = profits.map((profit, index) => [profit, capital[index]]).sort((a, b) => a[1] - b[1]);
    let profitPriorityQueue = new MaxPriorityQueue({ priority: (x) => x });
    let currentProjectIndex = 0;

    for (let i = 0; i < k; i++) {
        while (currentProjectIndex < projectList.length && projectList[currentProjectIndex][1] <= w) {
            profitPriorityQueue.enqueue(projectList[currentProjectIndex][0]);
            currentProjectIndex++;
        }
        if (profitPriorityQueue.isEmpty()) break;

        w += profitPriorityQueue.dequeue().element;
    }

    return w;
};