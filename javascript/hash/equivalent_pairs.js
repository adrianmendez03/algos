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
        const counts = Object.values(hash)
        let pairs = 0
        for (let count of counts) {
            for (let i = 1; i < count; i++) {
                pairs += i 
            }
        }
        return pairs
    }
}