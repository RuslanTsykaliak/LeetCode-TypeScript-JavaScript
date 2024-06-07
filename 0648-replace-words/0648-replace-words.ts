function replaceWords(dictionary: string[], sentence: string): string {
    // Convert the dictionary array to a set for faster lookup
    let setDictionary = new Set(dictionary);
    // Split the sentence into words
    let words = sentence.split(' ');

    // Iterate over each word in the sentence
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // Initialize the shortest root as the word itself
        let shortestRoot = word;
        // Check each substring of the word starting from the first character
        for (let j = 1; j <= word.length; j++) {
            let root = word.slice(0, j)
            // If the root exists in the dictionary and is shorter than the current shortest root, update the shortest root
            if (setDictionary.has(root) && root.length < shortestRoot.length) {
                shortestRoot = root;
            }
        }
        // Replace the word in the sentence with its shortest root
        words[i] = shortestRoot;
    }
    // Join the words back into a sentence
    sentence = words.join(' ');

    // Return the modified sentence
    return sentence;
};