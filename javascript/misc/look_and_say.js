// The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent term visually describes the digits appearing in the previous term.

class Solution {
    solve(n, k = 1, s = '1') {
        if (k === n) {
            return s
        }

        let i = 0, j = 0, newS = ''

        while (i < s.length) {
            while (s[j] === s[i]) {
                j++
            }
            newS += (j - i) + s[i]
            i = j
        }

        return this.solve(n, k + 1, newS)
    }
}

// loop through the string and get a character
// EX: 1211
// CHAR: 1
// loop through until str(i) !== CHAR
// take length of that and add it to string and add the char
// recursively call solve(n - 1, str)
// if n == 0 return str