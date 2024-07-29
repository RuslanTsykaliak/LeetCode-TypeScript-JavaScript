function numTeams(rating: number[]): number {
    let totalTeams = 0;
    const soldierCount = rating.length;

    for (let currentSoldier = 0; currentSoldier < soldierCount; currentSoldier++) {
        totalTeams += countTeams(rating, currentSoldier, soldierCount);
    }

    return totalTeams;
}

function countTeams(rating: number[], currentSoldier: number, soldierCount: number): number {
    const leftCounts = countSmallerAndLarger(rating, 0, currentSoldier, rating[currentSoldier]);
    const rightCounts = countSmallerAndLarger(rating, currentSoldier + 1, soldierCount, rating[currentSoldier]);

    const ascendingTeams = leftCounts[0] * rightCounts[1];
    const descendingTeams = leftCounts[1] * rightCounts[0];

    return ascendingTeams + descendingTeams;
}

function countSmallerAndLarger(rating: number[], start: number, end: number, reference: number): [number, number] {
    let smaller = 0, larger = 0;

    for (let i = start; i < end; i++) {
        if (rating[i] < reference) {
            smaller++;
        } else if (rating[i] > reference) {
            larger++;
        }
    }

    return [smaller, larger];
}