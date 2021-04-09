class Solution {
    solve(s) {
        return (s.match(/111/g) || []).length + (s.match(/000/g) || []).length
    }
}