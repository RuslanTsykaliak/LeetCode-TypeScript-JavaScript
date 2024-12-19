class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        n = len(arr)
        min_val = n
        max_val = -1
        chunks = 0

        start = 0
        for i, x in enumerate(arr):
            if x < min_val:
                min_val = x
            if x > max_val:
                max_val = x
            if min_val == start and max_val == i:
                chunks += 1
                min_val = n
                max_val - 1
                start = i + 1

        return chunks
 