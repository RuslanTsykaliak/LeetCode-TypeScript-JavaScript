class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        q = [(nums[i], i) for i in range(len(nums))]
        heapq.heapify(q)
        while k > 0:
            val, idx = heapq.heappop(q)
            nums[idx] = val * multiplier
            heapq.heappush(q, (nums[idx], idx))
            k -= 1
        return nums
