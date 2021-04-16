class Solution {
    solve(relations) {
        const hash = {}
        const output = new Set()

        for (let relation of relations) {
            const user = relation[0]
            const following = relation[1]

            if (hash[following]) {
                if (hash[following].has(user)) {
                    output.add(user)
                    output.add(following)
                }
            }

            if (hash[user]) {
                hash[user].add(following)
            } else {
                hash[user] = new Set([following])
            }
        }

        return [...output].sort((a, b) => a - b)
    }
}