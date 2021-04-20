class Solution {
    solve(nums) {
        const s = new Set(nums)
        if (Math.min(...s) === 0) {
            return 0
        } else if (Math.min(...s) > 0 || Math.max(...s) < 0) {
            return -1
        }
        while (s.size > 0) {
            const max = Math.max(...s)
            if (s.has(max * -1)) {
                return max
            } 
            s.delete(max)
        }
        return -1
    }
}