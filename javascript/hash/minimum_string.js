class Solution {
    solve(s, t) {
        const sHash = this.createHash(s)
        const tHash = this.createHash(t)
        let changes = 0
        for (let char in sHash) {
            const tCharCount = tHash[char] || 0
            changes += Math.max(sHash[char] - tCharCount, 0)
        }
        return changes
    }
    createHash(word) {
        const hash = {}
        for (let char of word) {
            if (hash[char]) {
                hash[char] += 1
            } else {
                hash[char] = 1
            }
        }
        return hash
    }
}