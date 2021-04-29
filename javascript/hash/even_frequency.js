// Given a list of integers nums, return whether all numbers appear an even number of times.

class Solution {
    solve(nums) {
        const hash = {}
        for (let num of nums) {
            if (hash[num]) {
                hash[num] += 1
            } else {
                hash[num] = 1
            }
        }

        for (let num in hash) {
            if (hash[num] % 2 !== 0) {
                return false
            }
        }

        return true
    }
}