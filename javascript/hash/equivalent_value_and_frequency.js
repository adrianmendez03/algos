// Given a list of integers nums, return whether there's an integer whose frequency in the list is same as its value.

class Solution {
    solve(nums) {
        const freq = {}
        let blah = false

        nums.forEach(num => {
            freq[num] = freq[num] ? freq[num] += 1 : 1
        })
        
        for (let num in freq) {
            if (num == freq[num]) {
                return true
            }
        }
        return false
    }
}