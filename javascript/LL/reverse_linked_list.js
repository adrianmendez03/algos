// Given a singly linked list node, return its reverse.

// Bonus: Can you do this in \mathcal{O}(1)O(1) space?

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(node) {
        let prev = null, curr = node

        while (curr) {
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        return prev
    }
}
