class Solution {
    solve(nums) {
        const relative = nums.map(num => num % 2 === 0)
        const sorted = nums.sort((a, b) => a - b)
        const output = []
        let i = 0, j = sorted.length - 1, k = 0
        for (let k = 0; k < relative.length; k++) {
            while (Math.abs(sorted[i]) % 2 !== 0 && i < sorted.length) {
                i++
            }
            while (Math.abs(sorted[j]) % 2 !== 1 && j >= 0) {
                j--
            }
            if (relative[k] === true) {
                output.push(sorted[i])
                i++
            } else {
                output.push(sorted[j])
                j--
            }
        }
        return output
    }
}