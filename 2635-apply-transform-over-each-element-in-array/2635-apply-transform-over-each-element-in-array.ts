function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    // Initialize an empty array to store the results
    const returnArr = []
    // Iterate over each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the function to the current element and its index, and add the result to the return array
        returnArr.push(fn(arr[i], i))
    }

    // Return the array of results
    return returnArr
};