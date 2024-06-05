function commonChars(words: string[]): string[] {
    let commonCharacters: string[] = []

    for (let el of words[0]) {
        if (words.every((word) => word.includes(el))) {
            commonCharacters.push(el)
            words = words.map((word) => word.replace(el, ''))
        }
    }

    return commonCharacters
};