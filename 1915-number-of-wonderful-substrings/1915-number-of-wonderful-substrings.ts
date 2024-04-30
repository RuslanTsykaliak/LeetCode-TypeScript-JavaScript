function wonderfulSubstrings(word: string): number {
    let result = 0;
    let bitmap = 0;
    // Create a map to store the frequencies of bitmaps
    let bitmapFrequencies = new Map<number, number>();
    // Set the frequency of bitmap 0 to 1
    bitmapFrequencies.set(0, 1);

    // Loop through each character in the word
    for (let i = 0; i < word.length; i++) {
        // Update bitmap by XORing it with the binary representation of the current character
        bitmap ^= 1 << word.charCodeAt(i) - 97;
        // Add the frequency of the current bitmap to the result
        result += bitmapFrequencies.get(bitmap) ?? 0;

        // Loop through the first 10 numbers
        for (let j = 0; j < 10; j++)
            // Add the frequency of the bitmap XORed with the binary representation of the current number to the result
            result += bitmapFrequencies.get(bitmap ^ 1 << j) ?? 0;

        // Update the frequency of the current bitmap in the map
        bitmapFrequencies.set(bitmap, (bitmapFrequencies.get(bitmap) ?? 0) + 1);
    }

    return result;
};
