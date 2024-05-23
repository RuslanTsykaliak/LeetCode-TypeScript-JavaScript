function beautifulSubsets(nums: number[], k: number): number {
    // Keeps track of the total number of beautiful subsets found
    let count: number = -1;

    // Recursive helper function to build and check beautiful subsets
    let record = (curr: number[], arr: number[]): void => {

        // Increment count for each valid subset explored
        count++;

        // Loop through remaining elements in the array
        for (let i: number = 0; i < arr.length; i++) {
            // Flag to track if the current element creates a beautiful subset
            let beautiful: boolean = true;

            // Check if the current element creates an absolute difference of k with any element in the current subset
            for (let j: number = 0; j < curr.length; j++) {
                if (Math.abs(arr[i] - curr[j]) === k) {
                    // Not a beautiful subset if difference is k, set flag and break
                    beautiful = false;
                    break;
                }
            }

            // If the current element maintains a beautiful subset, explore further by adding it and continuing with remaining elements
            if (beautiful) {
                record([...curr].concat(arr[i]), arr.slice(i + 1));
            }
        }
    };

    // Initiate the recursive exploration starting with an empty subset and the entire input array
    record([], nums);

    // Return the total count of beautiful subsets found
    return count;
};
