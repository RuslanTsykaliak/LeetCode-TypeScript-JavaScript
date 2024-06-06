// This function checks if it is possible to divide the hand into groups of 'groupSize' consecutive cards
function isNStraightHand(hand: number[], groupSize: number): boolean {
    // If the total number of cards is not a multiple of the group size, return false
    if (hand.length % groupSize !== 0) return false;

    // Initialize a Map to count the occurrence of each card
    let countMap = new Map<number, number>();
    for (let card of hand) {
        // For each card, increment its count in the Map
        countMap.set(card, (countMap.get(card) || 0) + 1);
    }

    // Get the sorted array of unique cards
    let sortedHand = Array.from(countMap.keys()).sort((a, b) => a - b);

    // Iterate over each unique card
    for (let card of sortedHand) {
        // Get the count of the current card
        let count = countMap.get(card) || 0;
        // If the count is more than 0
        if (count > 0) {
            // Check the next 'groupSize' - 1 cards
            for (let i = 1; i < groupSize; i++) {
                // If the count of the next card is less than the count of the current card, return false
                if ((countMap.get(card + i) || 0) < count) return false;
                // Decrease the count of the next card by the count of the current card
                countMap.set(card + i, (countMap.get(card + i) || 0) - count);
            }
        }
    }

    // If all checks pass, return true
    return true;
};
