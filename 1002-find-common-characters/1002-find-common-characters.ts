function commonChars(words: string[]): string[] {
    return [...words[0]].filter((el) => {
        if (words.every((word) => word.includes(el))) {
            words = words.map((word) => word.replace(el, ''))
            return true
        }
        return false
    })

    // 75.44%
    // let commonCharacters: string[] = []

    // for (let el of words[0]) {
    //     if (words.every((word) => word.includes(el))) {
    //         commonCharacters.push(el)
    //         words = words.map((word) => word.replace(el, ''))
    //     }
    // }

    // return commonCharacters
};