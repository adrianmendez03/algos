class Solution {

    output = ""

    blah (count, letter) {
        let i = 0
        while (i < count) {
            this.output += letter
            i++
        }
    }

    solve(s) {
        for (let i = 0; i < s.length; i++) {
            let count = ''
            while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
                count += s[i]
                i++
            }
            this.blah(parseInt(count), s[i])
        }
        return this.output
    }
    
}