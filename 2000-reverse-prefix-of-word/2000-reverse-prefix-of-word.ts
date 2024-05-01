function reversePrefix(word: string, ch: string): string {
    const index = word.indexOf(ch);

    if ( index === -1 ) {
        return word;
    }

    let reversed = word.slice(0, index + 1).split("").reverse().join("");

    let secondPart = word.slice(index + 1, word.length);

    return reversed += secondPart;  
};