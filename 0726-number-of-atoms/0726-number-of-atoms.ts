function makeSlice(s: string, idx: number) {
    let newStr = "", count = 1
    for (let i = idx; i >= 0; i--) {
        if (s[i] == ")") count++;
        else if (s[i] == "(") {
            count--;
            if (!count) return newStr
        }
        newStr = s[i] + newStr
    }
    return newStr;
}
function multiplieAtoms(f: string, factor: number) {
    const atoms = new Map();
    let atom = "", count = ""
    for (let i = 0; i <= f.length; i++) {
        if (!isNaN(+f[i])) count = count + f[i];
        else if ((atom && f[i] && f[i] == f[i]?.toLowerCase()) || !atom) {
            atom += f[i];
        } else {
            const fCount = (+count ? +count : 1) * factor
            const strCount = fCount > 1 ? fCount : ""
            if (atoms.has(atom) && !atoms.get(atom)) {
                atoms.set(atom, 1)
            }
            atoms.set(atom, (atoms.get(atom) + fCount) || strCount)
            atom = f[i], count = ""
        }
    }
    let result = ""
    for (const [atom, count] of atoms.entries()) {
        result += atom + count
    }
    return result
}
function countOfAtoms(f: string, deep = 0): string {
    let result = "", n = "";
    for (let i = f.length-1; i >= 0; i--) {
        if (!isNaN(+f[i])) n = f[i] + n
        else if (n && f[i] == ")") {
            const slice = makeSlice(f, i - 1)
            result += multiplieAtoms(countOfAtoms(slice, deep+1), +n)
            n = "", i -= slice.length + 1
        } else if (f[i] != ")" && f[i] != "(") {
           result = f[i] + n + result; 
           n=""
        } 
    }
    if (deep) return result
    return multiplieAtoms(result.split(/(?=[A-Z])/).sort().join(""), 1)
};