class Solution {
    solve(nums) {
        let count = 0
        const s = new Set(nums)
        for (let num of nums) {
            if (s.has(num + 1)) {
                count++
            }
        }
        return count
    }
}