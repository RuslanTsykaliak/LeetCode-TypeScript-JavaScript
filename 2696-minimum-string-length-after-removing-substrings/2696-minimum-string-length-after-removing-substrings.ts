function minLength(s: string): number {
    while (/AB|CD/.test(s)) {
        s = s.replace(/AB|CD/, '');
    }
    return s.length;
};