// Given a binary tree root, return the same tree except every node's value is 
// replaced by its original value plus all of the sums of its left and right subtrees.

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
    elephant(root) {
        if (!root) {
            return 0
        }

        const left = this.elephant(root.left)
        const right = this.elephant(root.right)

        root.val += left + right

        return root.val
    }

    solve(root) {
        this.elephant(root)
        return root 
    }
}