function canMakeSubsequence(str1: string, str2: string): boolean {
    let charCode = "a".charCodeAt(0)
    let r = 0;

    for (let i = 0; i < str1.length; i++) {
        let chCode = ((str1.charCodeAt(i) - charCode + 1) % 26) + charCode
        if (str1.charAt(i) == str2.charAt(r)) r++
        else if (String.fromCharCode(chCode) == str2.charAt(r)) r++
    }

    return r == str2.length
};