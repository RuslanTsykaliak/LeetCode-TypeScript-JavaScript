function pickGifts(gifts: number[], k: number): number {
    let result = []

    while (k > 0) {
        let maxPile = Math.max(...gifts)
        let maxPileIndex = gifts.indexOf(maxPile)

        gifts[maxPileIndex] = Math.floor(Math.sqrt(maxPile))
        k--
    }
    return gifts.reduce((sum, e) => sum + e, 0)
};