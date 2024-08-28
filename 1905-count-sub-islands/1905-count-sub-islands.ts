function countSubIslands(grid1: number[][], grid2: number[][]): number {

    let res = 0, isSubIsland = true;

    /*
    Look at each value in grid2 - if it's a 1, start DFS.
    Switch isSubIsland from inside DFS function.
    */
    for (let y = 0; y < grid2.length; y++) {
        for (let x = 0; x < grid2[0].length; x++) {
            if (grid2[y][x] === 1) {
                isSubIsland = true;
                dfs(y, x)
                if (isSubIsland) res += 1
            }
        }
    }

    function dfs(y: number, x: number) {
        grid2[y][x] = -1; // Switch to -1 so we don't count it again
        if (grid1[y][x] !== 1) isSubIsland = false; //Even if it is NOT a subisland, continue marking values as -1 so we don't need to repeat in the future

        //Common left right up down DFS approach
        if (x - 1 >= 0 && grid2[y][x - 1] === 1) dfs(y, x - 1);
        if (x + 1 <= grid2[0].length - 1 && grid2[y][x + 1] === 1) dfs(y, x + 1);
        if (y - 1 >= 0 && grid2[y - 1][x] === 1) dfs(y - 1, x);
        if ((y + 1 <= grid2.length - 1) && grid2[y + 1][x] === 1) dfs(y + 1, x);
    }

    return res;
};
