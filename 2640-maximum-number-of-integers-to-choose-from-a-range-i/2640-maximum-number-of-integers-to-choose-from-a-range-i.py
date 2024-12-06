class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        sett = set(banned)
        # print(sett)
        array = [0]
        for i in range(1, n + 1):
            if i not in sett:
                array.append(i + array[-1])
        x = bisect_right(array, maxSum)
        return x - 1
