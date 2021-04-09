class Solution {
    solve(s) {
        return Math.abs(s.length - 2 * (s.match(/1/g) || []).length)
    }
}