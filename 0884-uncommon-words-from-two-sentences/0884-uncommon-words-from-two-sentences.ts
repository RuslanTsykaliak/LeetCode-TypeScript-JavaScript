function uncommonFromSentences(s1: string, s2: string): string[] {
    // Create a new map to store the frequency of each word.
    let m = new Map<string, number>();

    // Split the first sentence 's1' into an array of words.
    let s1Words = s1.split(' ');

    // Iterate through each word in the first sentence (s1).
    for (let i = 0; i < s1Words.length; i++) {
        // If the word already exists in the map, update its frequency (increase count by 1).
        if (m.has(s1Words[i])) {
            // m.get(s1Words[i]) returns the current count of the word, and we add 1 to it.
            m.set(s1Words[i], m.get(s1Words[i])! + 1);
        } else {
            // If the word doesn't exist in the map, add it with an initial frequency of 1.
            m.set(s1Words[i], 1);
        }
    }

    // Split the second sentence 's2' into an array of words.
    let s2Words = s2.split(' ');

    // Iterate through each word in the second sentence (s2).
    for (let i = 0; i < s2Words.length; i++) {
        // If the word already exists in the map (from s1 or s2), update its frequency.
        if (m.has(s2Words[i])) {
            // m.get(s2Words[i]) returns the current count of the word, and we add 1 to it.
            m.set(s2Words[i], m.get(s2Words[i])! + 1);
        } else {
            // If the word doesn't exist in the map, add it with an initial frequency of 1.
            m.set(s2Words[i], 1);
        }
    }

    // Create an empty array to store the result (uncommon words).
    let result: string[] = [];

    // Iterate through the map to check the frequency of each word.
    for (let [key, val] of m) {
        // If the frequency of the word is exactly 1, it means the word is uncommon.
        if (val === 1) {
            // Add the uncommon word to the result array.
            result.push(key);
        }
    }

    // Return the array of uncommon words.
    return result;
}
