/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
 class Solution {
    sum(root, count = 0) {
        if (!root) {
            return [0, count]
        }
        const left = this.sum(root.left, count)
        const right = this.sum(root.right, count)
        if ((left[0] + right[0]) % 2 === 1 && root.left && root.right) {
            count++
        }
        return [left[0] + right[0] + root.val, count += left[1] + right[1]]
    }

    solve(root) {
        return this.sum(root, 0)[1]
    }
}