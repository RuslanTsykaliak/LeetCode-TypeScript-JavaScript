function countConsistentStrings(allowed: string, words: string[]): number {
    return words.reduce((prev, cur) => cur.replace(new RegExp(allowed.split('').join('|'), 'g'), '') === '' ? prev + 1 : prev, 0);
}