class Solution:
	def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
		s = {}

		for i in range(0, len(nums)):
			if nums[i] in s and abs(i - s[nums[i]]) <= k:
				return True
			s[nums[i]] = i

		return False