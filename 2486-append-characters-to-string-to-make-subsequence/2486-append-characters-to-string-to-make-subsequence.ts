function appendCharacters(s: string, t: string): number {
    // Initialize a variable to keep track of the remaining characters in string t
    let remainingChars: number = t.length
    // Initialize a variable to keep track of the current index in string t
    let j: number = 0

    // Iterate over each character in string s
    for (let i: number = 0; i < s.length; i++) {
        // If the current character in string s is the same as the current character in string t
        if (s[i] === t[j]) {
            // Move to the next character in string t
            j++
            // Decrease the count of remaining characters in string t
            remainingChars--
        }
    }
    // If there are remaining characters in string t, return the count of remaining characters
    return remainingChars
};
