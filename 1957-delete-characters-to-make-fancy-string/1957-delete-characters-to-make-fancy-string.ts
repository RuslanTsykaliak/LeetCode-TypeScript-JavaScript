function makeFancyString(s: string): string {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let next1 = s[i + 1];
        let next2 = s[i + 2];

        if (!(s[i] === next1 && next2 === next1)) {
            result += s[i];
        }
    }

    return result;
};