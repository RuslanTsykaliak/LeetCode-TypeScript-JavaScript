function scoreOfString(s: string): number {
    // Initialize a variable to keep track of the score
    let score = 0

    // Iterate over each character in the string, except the last one
    for (let i = 0; i < s.length - 1; i++) {
        // Add the absolute difference between the ASCII values of current character and the next one to the score
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
    }

    // Return the final score
    return score
};