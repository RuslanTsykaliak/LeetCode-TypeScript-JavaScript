function removeSubfolders(folder: string[]): string[] {
    folder.sort();
    const ans: string[] = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        const lastFolder = ans[ans.length - 1] + '/';
        if (!folder[i].startsWith(lastFolder)) {
            ans.push(folder[i]);
        }
    }

    return ans;
};