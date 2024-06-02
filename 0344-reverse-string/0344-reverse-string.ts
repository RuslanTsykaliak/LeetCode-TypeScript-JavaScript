/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let leftIndex = 0 // Start from the beginning of the string
    let rightIndex = s.length - 1 // Start from the end of the string

    // Continue swapping characters while the left index is less than or equal to the right index
    while (leftIndex <= rightIndex) {
        // Hold the character at the left index in a temporary variable
        const temp = s[leftIndex]

        // Replace the character at the left index with the character at the right index
        s[leftIndex] = s[rightIndex]

        // Replace the character at the right index with the character from the temporary variable
        s[rightIndex] = temp

        // Move the left index one step towards the right
        leftIndex++
        // Move the right index one step towards the left
        rightIndex--
    }
};