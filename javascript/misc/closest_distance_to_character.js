// Given a string s and a character c, return a new list of integers of the same length as s 
// where for each index i its value is set the closest distance of s[i] to c. You can assume c exists in s

class Solution {
    solve(s, c) {
        const pos = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === c) {
                pos.push(i)
            }
        }

        const result = []
        let i = 0, j = 0

        while (result.length < s.length && pos[j + 1]) {
            const d1 = Math.abs(i - pos[j])
            const d2 = Math.abs(i - pos[j + 1])
            result.push(Math.min(d1, d2))
            if (d2 <= d1) {
                j++
            }
            i++
        }

        while (result.length < s.length) {
            result.push(Math.abs(i - pos[j]))
            i++
        }
        
        return result
    }
}