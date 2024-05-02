// Function to check if all pairs of numbers can be traversed based on their prime factors
function canTraverseAllPairs(nums: number[]): boolean {
    // Get the length of the input array
    const n = nums.length;
    // Initialize a graph to store the connections between numbers
    const graph = new Map<number, number[]>();

    // Function to add an edge in the graph
    function addEdge(u: number, v: number) {
        // If the node does not exist in the graph, initialize it
        if (!graph.has(u)) graph.set(u, []);
        // Add the edge to the graph
        graph.get(u)!.push(v);
    }

    // Function to get all prime factors of a number
    function getPrimeFactors(num: number): number[] {
        // Initialize a set to store the prime factors
        const factors = new Set<number>();
        // Iterate from 2 to the square root of the number
        for (let i = 2; i * i <= num; i++) {
            // While the number is divisible by i, add i to the factors and divide the number by i
            while (num % i === 0) {
                factors.add(i);
                num /= i;
            }
        }
        // If the number is greater than 1, it is a prime factor
        if (num > 1) factors.add(num);
        // Return the prime factors as an array
        return Array.from(factors);
    }

    // Creating connections between numbers based on their prime factors
    const primeToIndex = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        // Get the prime factors of the current number
        const factors = getPrimeFactors(nums[i]);
        for (const factor of factors) {
            // If the prime factor has been seen before, add an edge between the current number and the number associated with the prime factor
            if (primeToIndex.has(factor)) {
                addEdge(primeToIndex.get(factor)!, i);
                addEdge(i, primeToIndex.get(factor)!);
            }
            // Associate the prime factor with the current number
            primeToIndex.set(factor, i);
        }
    }

    // Depth-First Search to check if all numbers are connected
    const visited = new Array(n).fill(false);
    function dfs(node: number) {
        // Mark the current node as visited
        visited[node] = true;
        // Visit all neighbors of the current node
        for (const neighbor of graph.get(node) || []) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // Start DFS from the first index
    dfs(0);

    // Check if all indices are visited
    return visited.every(v => v);
}
