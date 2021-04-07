class Solution {
    solve(matrix) {
        const overall = new Set()
        for (let i = 0; i < matrix.length; i++) {
            const row = new Set()
            const column = new Set()
            for (let j = 0; j < matrix[i].length; j++) {
                if (row.has(matrix[i][j])) {
                    return false
                }
                if (column.has(matrix[j][i])) {
                    return false
                }
                column.add(matrix[j][i])
                row.add(matrix[i][j])
                overall.add(matrix[i][j])
            }
        }
        return overall.size === matrix.length
    }
}