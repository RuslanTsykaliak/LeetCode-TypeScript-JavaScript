function removeStones(stones: number[][]): number {
    let connectedComponentCount = 0;
    const setRepresentatives = new Array<number>(20003).fill(0);

    for (const stone of stones) {
        mergeComponents(stone[0] + 1, stone[1] + 10002, setRepresentatives);
    }

    return stones.length - connectedComponentCount;

    function findRepresentative(element: number, setRepresentatives: number[]): number {
        if (setRepresentatives[element] === 0) {
            setRepresentatives[element] = element;
            connectedComponentCount++;
        }
        return setRepresentatives[element] === element
            ? element
            : (setRepresentatives[element] = findRepresentative(setRepresentatives[element], setRepresentatives));
    }

    function mergeComponents(elementA: number, elementB: number, setRepresentatives: number[]) {
        const repA = findRepresentative(elementA, setRepresentatives);
        const repB = findRepresentative(elementB, setRepresentatives);
        if (repA !== repB) {
            setRepresentatives[repB] = repA;
            connectedComponentCount--;
        }
    }
}