// Given a string s, consisting of "X" and "Y"s, delete the minimum number of 
// characters such that there's no consecutive "X" and no consecutive "Y".

class Solution {
    solve(s) {
        let i = 0, j = i + 1, output = ""
        while (i < s.length) {
            output += s[i]
            while (s[j] === s[i]) {
                j++
            }
            i = j
        }
        return output
    }
}