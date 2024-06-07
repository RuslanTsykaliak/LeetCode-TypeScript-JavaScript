function replaceWords(dictionary: string[], sentence: string): string {
    let setDictionary = new Set(dictionary);
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let shortestRoot = word;

        for (let j = 1; j <= word.length; j++) {
            let root = word.slice(0, j);
            if (setDictionary.has(root) && root.length < shortestRoot.length) {
                shortestRoot = root;
            }
        }
        words[i] = shortestRoot
    }

    sentence = words.join(' ')

    return sentence
};