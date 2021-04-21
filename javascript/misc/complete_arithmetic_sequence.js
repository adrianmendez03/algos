// You are given a list of integers nums that used to be an arithmetic sequence. Given that a number was removed, and that the number was not 
// the first or the last element, return the removed number.

class Solution {
    solve(nums) {
        const diff = (nums[nums.length - 1] - nums[0]) / nums.length
        for (let i = 0; i < nums.length; i++) {
            if (nums[i + 1] !== nums[i] + diff) {
                return nums[i] + diff
            }
        }
    }
}