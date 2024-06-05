// This function takes an array of strings as input
function commonChars(words: string[]): string[] {
    // The first approach has a performance of 61.40%
    // It uses the filter method to iterate over each character in the first string of the array
    // return [...words[0]].filter((el) => {
    //     // If every string in the array includes the current character
    //     if (words.every((word) => word.includes(el))) {
    //         // Replace the first occurrence of the current character in each string with an empty string
    //         words = words.map((word) => word.replace(el, ''))
    //         // Include the current character in the output array
    //         return true
    //     }
    //     // Exclude the current character from the output array
    //     return false
    // })

    // The second approach has a performance of 
    // It uses a for loop to iterate over each character in the first string of the array
    let commonCharacters: string[] = []

    for (let el of words[0]) {
        if (words.every((word) => word.includes(el))) {
            commonCharacters.push(el)
            words = words.map((word) => word.replace(el, ''))
        }
    }

    return commonCharacters
};
