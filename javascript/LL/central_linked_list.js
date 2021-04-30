// Given a singly linked list node, return the value of the middle node. 
// If there's two middle nodes, then return the second one.

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
        let fast = node, slow = node

        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }

        return slow.val
    }
}