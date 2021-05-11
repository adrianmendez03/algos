// Given a list of integers nums, find all duplicate numbers and delete their last occurrences.

class Solution {
    solve(nums) {
        const hash = {}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (hash[num]) {
                hash[num].dupe = true
                hash[num].last = i
            } else {
                hash[num] = {}
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i]
            if (hash[num].dupe) {
                hash[num].dupe = false
                nums.splice(hash[num].last, 1)
            } 
        }

        return nums
    }
}