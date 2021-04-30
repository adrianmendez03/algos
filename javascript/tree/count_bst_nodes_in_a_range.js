// Given a binary search tree root, and integers lo and hi, 
// return the count of all nodes in root whose values are between [lo, hi] (inclusive).


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
    solve(root, lo, hi) {
        if (!root) {
            return 0
        }

        let count = 0
        if (root.val >= lo && root.val <= hi) {
            count++
        }

        const left = this.solve(root.left, lo, hi)
        const right = this.solve(root.right, lo, hi)

        return count + left + right
    }
}