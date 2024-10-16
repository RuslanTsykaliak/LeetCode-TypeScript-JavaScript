function longestDiverseString(a: number, b: number, c: number): string {
    // Create an array of character-count tuples
    const chars: [string, number][] = [
        ['a', a],
        ['b', b],
        ['c', c]
    ];

    // Initialize the result array and calculate total characters
    const ans: string[] = [];
    const sum: number = a + b + c;

    // Continue building the string until we've used all characters or can't add more
    while (ans.length < sum) {
        const n: number = ans.length;

        // Sort the chars array based on count in descending order
        chars.sort(([, c1], [, c2]) => c2 - c1);

        // Choose which character to add next
        // If the last two characters are the same as the most frequent remaining character,
        // choose the second most frequent to avoid three consecutive same characters
        const char: [string, number] =
            (ans[n - 1] === ans[n - 2] && ans[n - 1] === chars[0][0]) ? chars[1] : chars[0];

        // If the chosen character has count 0, we can't add more characters
        if (char[1] === 0) break;

        // Add the chosen character to the result
        ans.push(char[0]);

        // Decrease the count of the used character
        char[1]--;
    }

    // Join the characters in the result array and return as a string
    return ans.join('');
}