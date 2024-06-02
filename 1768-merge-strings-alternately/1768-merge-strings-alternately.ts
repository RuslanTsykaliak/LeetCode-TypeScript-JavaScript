function mergeAlternately(word1: string, word2: string): string {
    // Determine the maximum length between the two words
    let maxLength = Math.max(word1.length, word2.length)

    // Initialize the merge string
    let mergedString = ''

    // Iterate up to the mazimum lenght
    for (let i = 0; i < maxLength; i++) {
        // Add the characters from word1 and word2 at the current index to the merged string
        // If a character does not exist (i.e., the index is out of range), add an empty string
        mergedString += (word1[i] ?? '') + (word2[i] ?? '')
    }

    // Return the merge string
    return mergedString
};