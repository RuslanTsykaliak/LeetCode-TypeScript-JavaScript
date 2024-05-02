function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // Create a map to store flight routes from each city
    const flightMap: Map<number, number[][]> = new Map();
    for(let i = 0; i < n; i++){
        flightMap.set(i, []);
    }

    // Populate the map with flight routes
    flights.forEach(entry => {
        flightMap.get(entry[0]).push(entry);
    })

    // Initialize an array to store the minimum cost to reach each city
    const minCosts: number[] = new Array(n).fill(Infinity);
    minCosts[src] = 0; // The cost to reach the source city is 0

    let numStops = 0; // Initialize a counter to track the number of stops
    let queuePointer = 0; // Initialize a pointer to track the current position in the queue

    // Initialize a queue with the source city
    const queue = [{city: src, price: 0}];

    // Process the queue while there are cities to visit and the number of stops is within limit
    while(queuePointer < queue.length && numStops <= k){
        const roundLength = queue.length; // Get the number of cities to visit in this round
        for(let i = queuePointer; i < roundLength; i++){
            const curr = queue[queuePointer++]; // Get the current city and increment the pointer
            const basePrice = curr.price; // Get the cost to reach the current city
            const routes = flightMap.get(curr.city); // Get the flight routes from the current city

            // Process each route from the current city
            routes.forEach(route => {
                const nextCity = route[1]; // Get the destination city
                const oldCost = minCosts[nextCity]; // Get the current minimum cost to reach the destination city
                const newCost = basePrice + route[2]; // Calculate the new cost to reach the destination city

                // If the new cost is less than the current minimum cost, update the minimum cost and add the destination city to the queue
                if(newCost < oldCost){
                    minCosts[nextCity] = newCost;
                    queue.push({city: nextCity, price: newCost});
                }
            })
        }
        numStops++; // Increment the number of stops after processing all cities in this round
    }

    // If the minimum cost to reach the destination city is Infinity, return -1, otherwise return the minimum cost
    return minCosts[dst] === Infinity ? -1 : minCosts[dst];
};
