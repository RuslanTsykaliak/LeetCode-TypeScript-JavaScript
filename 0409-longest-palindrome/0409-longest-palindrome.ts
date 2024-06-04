function longestPalindrome(s: string): number {
    // Create a map to store the characters in the string
    let charMap = new Map()

    // Iterate over each character in the string
    for (let char of s) {
        // If the character is not in the map, add it
        if (!charMap.has(char)) charMap.set(char, 1)
        // If it is alredy in the map, remove it
        else charMap.delete(char)
    }

    // Convert the map values to an array
    let charCounts = Array.from(charMap.values())

    // If there are no unpaired characters, return the length of the string
    if (charCounts.length <= 1) return s.length
    // Otherwise, subtract the number of unpaired characters from the length of the string and add 1
    else return s.length - charCounts.length + 1
} 