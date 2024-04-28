function firstPalindrome(words: string[]): string {
    let firstPalindrome = '';
    words.forEach((word)=> {
        let revWord = word.split('').reverse().join('');
        if(word === revWord && firstPalindrome === '') {
            firstPalindrome = word;
        }
    })
    return firstPalindrome;
};