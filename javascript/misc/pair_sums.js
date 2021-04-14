//Given a list of positive integers nums, return the number of valid pairs of indices (i, j), 
//with i < j, such that A[i] + A[j] is an odd number.

class Solution {
    solve(nums) {
        let odds = 0
        let evens = 0
        nums.forEach(num => {
            if (num % 2 === 0) {
                evens++
            } else {
                odds++
            }
        })
        return evens * odds
    }
}