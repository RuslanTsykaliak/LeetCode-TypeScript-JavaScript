function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    // Initialize left and right pointers for binary search, and the length of the array
    let l = 0, r = 1, n = arr.length


    // Start an infinite loop, we'll break out of it when we find the answer
    while (true) {
        // Calculate the middle value between left and right pointers
        const m = (l + r) / 2
        // Initialize values for the loop
        let j = 0, total = 0, a = 0, b = 0, maxFrac = 0

        // Start a loop from the first element to the last
        for (let i = 0; i < n; i++) {
            // While the current element is greater than or equal to the jth element times the middle value
            while (j < n && arr[i] >= arr[j] * m) {
                j++
            }

            // Add the difference between the length of the array and j to the total
            total += n - j
            // If the maximum fraction is less than the current element divided by the jth element
            if (j < n && maxFrac < arr[i] / arr[j]) {
                // Update the maximum fraction and the indices a and b
                maxFrac = arr[a = i] / arr[b = j]
            }
        }

        // If the total equals k, return the fraction as an array
        if (total === k) {
            return [arr[a], arr[b]]
        }

        // If the total is greater than k, update the right pointer to the middle value
        if (total > k) {
            r = m
        }
        // Otherwise, update the left pointer to the middle value
        else {
            l = m
        }
    }
};