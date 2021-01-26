class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        if target in nums :
            return nums.index(target)
        
        else :
            for x in range(len(nums)) :
                if target < nums[x] :
                    return nums.index(nums[x])
                elif nums[-1] < target :
                    return nums.index(nums[-1]) + 1