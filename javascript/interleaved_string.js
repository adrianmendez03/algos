class Solution {
    solve(s0, s1) {
        let output = ""
        let i = 0
        while (output.length !== s1.length + s0.length) {
            if (s0[i]) {
                output += s0[i]
            }
            if (s1[i]) {
                output += s1[i]
            }
            i++
        }
        return output
    }
}