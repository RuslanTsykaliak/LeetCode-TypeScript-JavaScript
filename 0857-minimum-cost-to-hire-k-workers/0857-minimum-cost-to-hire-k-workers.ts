// Define a Worker class
class Worker {
    quality: number;  // Quality of the worker
    wage: number;  // Wage of the worker
    ratio: number;  // Ratio of wage to quality

    // Constructor for the Worker class
    constructor(quality: number, wage: number) {
        this.quality = quality;  // Set the quality
        this.wage = wage;  // Set the wage
        this.ratio = wage / quality;  // Calculate the ratio
    }
}

// Function to find the minimum cost to hire k workers
function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    const n: number = quality.length;  // Get the number of workers
    const workers: Worker[] = [];  // Initialize an array to store the workers

    // Create a new Worker object for each worker and add it to the array
    for (let i = 0; i < n; i++) {
        workers.push(new Worker(quality[i], wage[i]));
    }
    // Sort the workers by their ratio of wage to quality
    workers.sort((a, b) => a.ratio - b.ratio);

    let ans: number = Number.MAX_SAFE_INTEGER;  // Initialize the answer as the maximum safe integer
    let sumq: number = 0;  // Initialize the sum of qualities
    const pool: number[] = [];  // Initialize a pool to store the qualities

    // For each worker in the sorted array
    for (const worker of workers) {
        pool.push(worker.quality);  // Add the worker's quality to the pool
        sumq += worker.quality;  // Add the worker's quality to the sum

        // If the pool has more than k workers
        if (pool.length > k) {
            pool.sort((a, b) => b - a);  // Sort the pool in descending order
            sumq -= pool.shift()!;  // Remove the worker with the highest quality from the pool and subtract its quality from the sum
        }

        // If the pool has exactly k workers
        if (pool.length === k) {
            // Update the answer as the minimum of the current answer and the sum of qualities times the current worker's ratio
            ans = Math.min(ans, sumq * worker.ratio);
        }
    }

    // Return the minimum cost to hire k workers
    return ans;
};
