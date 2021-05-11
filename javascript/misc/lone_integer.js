// You are given a list of integers nums where each integer occurs exactly three times except for one which occurs once. Return the lone integer.

// Bonus: solve it in \mathcal{O}(1)O(1) space.

class Solution {
    solve(nums) {
        if (nums.length === 1) {
            return nums[0]
        }

        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length; i++) {
            const prev = nums[i - 1], curr = nums[i], next = nums[i + 1]
            if (curr !== prev && curr !== next) {
                return curr
            }
        }
    }
}