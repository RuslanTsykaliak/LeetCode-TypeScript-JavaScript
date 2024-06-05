function commonChars(words: string[]): string[] {
    // Initialize an array to store the common characters
    let commonCharacters: string[] = [];
    // Create an array of characters from the first string in the input array
    let firstWordChars: string[] = [...words[0]];

    // Iterate over each character in the first string
    firstWordChars.forEach((char) => {
        // If every string in the array includes the current character
        if (words.every((word) => word.includes(char))) {
            // Add the current character to the array of common characters
            commonCharacters.push(char);
            // Replace the first occurrence of the current character in each string with an empty string
            words = words.map((word) => word.replace(char, ''));
        }
    });

    // Return the array of common characters
    return commonCharacters;
};
