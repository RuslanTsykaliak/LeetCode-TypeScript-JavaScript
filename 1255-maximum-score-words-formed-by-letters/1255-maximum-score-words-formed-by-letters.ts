function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    // Store the occurrence of each word and letter, and the maximum score
    const wordOccurences = {}
    const letterOccurences = {}
    let maxScore = 0

    for (const word of words) {
        // Increment the occurrence of the word or set it to 1 if it's the first occurrence
        wordOccurences[word] = wordOccurences[word] ? wordOccurences[word] + 1 : 1
    }

    for (const letter of letters) {
        // Increment the occurrence of the letter or set it to 1 if it's the first occurrence
        letterOccurences[letter] = letterOccurences[letter] ? letterOccurences[letter] + 1 : 1
    }

    // Function to calculate the score of a word
    function getWordScore(word: string): number {
        // Split the word into characters, calculate the score for each character, and sum them up
        return word.split('').reduce((acc, char) => acc + score[char.charCodeAt(0) - 97], 0)
    }

    // Function to check if a word can be formed with the given letters
    function canFormWord(
        word: string,
        letters: Record<string, number>,
        words: Record<string, number>
    ) {
        // If the word is not in the words object, return false
        if (words[word] == 0) {
            return false
        }

        // Store the occurrence of each character in the word
        const charOccurencesInWord = {}

        for (const char of word) {
            // Increment the occurrence of the character or set it to 1 if it's the first occurrence
            charOccurencesInWord[char] = charOccurencesInWord[char] ? charOccurencesInWord[char] + 1 : 1
        }

        for (const key in charOccurencesInWord) {
            // If the key is not in the letters object or its occurrence is less than that in charOccurencesInWord, return false
            if (!letters[key] || letters[key] < charOccurencesInWord[key]) {
                return false
            }
        }

        // If none of the conditions above are met, return true
        return true
    }

    // Function to calculate the score
    function calculateScore(
        index: number,
        wordOccurences: Record<string, number>,
        letterOccurences: Record<string, number>,
        currentScore: number
    ) {
        // If the index is equal to the length of the words array, update maxScore and return
        if (index == words.length) {
            maxScore = Math.max(maxScore, currentScore)
            return
        }

        // If the word at the current index can be formed
        if (canFormWord(words[index], letterOccurences, wordOccurences)) {
            // Calculate the new score
            const newScore = currentScore + getWordScore(words[index])
            // Create a new object for letter occurrences
            const newLetterOccurences = { ...letterOccurences }
            // Decrement the occurrence of each character in the word
            for (const char of words[index]) {
                newLetterOccurences[char] -= 1
            }

            // Create a new object for word occurrences and decrement the occurrence of the word
            const newWordOccurences = { ...wordOccurences, [words[index]]: wordOccurences[words[index]] - 1 }
            // Recursively call calculateScore with the new parameters
            calculateScore(index + 1, newWordOccurences, newLetterOccurences, newScore)

        }

        // Recursively call calculateScore with the current parameters
        calculateScore(index + 1, wordOccurences, letterOccurences, currentScore)

    }

    // Call calculateScore with the initial parameters
    calculateScore(0, wordOccurences, letterOccurences, 0)

    // Return the maximum score
    return maxScore
};