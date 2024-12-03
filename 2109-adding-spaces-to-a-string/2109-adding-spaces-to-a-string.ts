function addSpaces(s: string, spaces: number[]): string {
    const M = s.length;
    const N = spaces.length;
    const sb = new Array<string>(M + N);

    let sbIndex = 0;
    let spaceIndex = 0;
    for (let i = 0; i < M; ++i) {
        if (spaceIndex < N && i == spaces[spaceIndex]) {
            ++spaceIndex;
            sb[sbIndex++] = " ";
        }
        sb[sbIndex++] = s[i];
    }

    return sb.join("");
};