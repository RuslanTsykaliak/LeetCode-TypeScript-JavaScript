function wordBreak(s: string, wordDict: string[]): string[] {

}; a// Function to break a string into words present in a dictionary
function wordBreak(s: string, wordDict: string[]): string[] {
    // Initialize an array to store the answer
    const answer = [];
    // Create a set from the word dictionary for efficient lookup
    const dict = new Set(wordDict);

    // Define a Depth-First Search function
    const dfs = (word: string, cur: string[]) => {
        // If the word length is zero, join the current words and add to the answer
        if (word.length === 0) {
            answer.push(cur.join(' '));
        }

        // Iterate through the word
        for (let i = 0; i <= word.length; i++) {
            // Slice the word up to the current index
            const sliced = word.slice(0, i);
            // If the sliced word is in the dictionary
            if (dict.has(sliced)) {
                // Slice the remaining part of the word
                const last = word.slice(i);
                // Push the sliced word to the current array
                cur.push(sliced);
                // Recursively call dfs with the remaining word and current array
                dfs(last, cur);
                // Pop the last word from the current array
                cur.pop();
            }
        }
    };
    // Call dfs with the string and an empty array
    dfs(s, []);
    // Return the answer
    return answer;
};
