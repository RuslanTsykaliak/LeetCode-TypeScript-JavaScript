function numSteps(s: string): number {
    // Initialize the stepCount and carryOver variables
    let stepCount = 0
    let carryOver = 0

    // Iterate over the s from right to left
    for (let index = s.length - 1; index >= 0; index--) {
        // If the current character is '1' (odd)
        if (s[index] === '1') {
            // If there is no carryOver from the previous operation
            if (carryOver === 0) {
                // If this is the first character
                if (index === 0) {
                    // No further step is needed, break the loop
                    break;
                }
                // If this is not the first character, apply rule 2 and then rule 1
                // This increments the carryOver and adds 2 to the stepCount
                carryOver = 1
                stepCount += 2
            } else {
                // If there is a carryOver, apply rule 1 with carryOver = 1
                // This increments the stepCount by 1
                carryOver = 1
                stepCount += 1
            }
        } else {
            // If the current character is '0' (even)
            if (carryOver === 0) {
                // If there is no carryOver, directly apply rule 1
                // This increments the stepCount by 1
                stepCount += 1
            } else {
                // If there is a carryOver, apply rule 2 and then rule 1
                // This increments the carryOver and adds 2 to the stepCount
                carryOver = 1
                stepCount += 2
            }
        }
    }
    // Return the total number of steps
    return stepCount
};
