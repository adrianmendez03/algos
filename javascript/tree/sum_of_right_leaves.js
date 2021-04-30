// Given a binary tree root, return the sum of all leaves that are right children.

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
    solve(root, isRight = false) {
        if (!root) {
            return 0
        }

        if (!root.left && !root.right && isRight) {
            return root.val
        }

        const left = this.solve(root.left)
        const right = this.solve(root.right, true)

        return left + right
    }
}