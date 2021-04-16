class Solution {
    solve(path) {
        const output = []
        for (let location of path) {
            if (location === '..') {
                output.pop()
            } else if (location !== '.') {
                output.push(location)
            } 
        }
        return output
    }
}