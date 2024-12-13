class Solution:
    def findScore(self, nums: List[int]) -> int:
        
        # create a min heap and store the smallest element in it
        a = [(nums[index], index) for index in range(len(nums))]
        heapq.heapify(a)

        score = 0
        total = 0
        while a:
            val, index = heapq.heappop(a)
            if nums[index] == 10**9:
                continue
            
            score += val
            total += 1
            nums[index] = 10**9
            
            # remove index - 1
            if index > 0 and nums[index-1] != 10**9:
                nums[index-1] = 10**9
                total += 1

            # remove index + 1
            if index < len(nums) - 1 and nums[index+1] != 10**9:
                nums[index+1] = 10**9
                total += 1

            if total == len(nums):
                return score
        
        return score