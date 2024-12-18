class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        min_indexes = []
        for i in range(0, len(prices)):
            minimum_index = -1
            for j in range(i + 1, len(prices)):
                if prices[j] <= prices[i]:
                    minimum_index = j
                    min_indexes.append(prices[i] - prices[j])
                    break
            if minimum_index == -1:
                min_indexes.append(prices[i])
        return min_indexes
