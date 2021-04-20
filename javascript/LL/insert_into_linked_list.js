/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
 class Solution {
    solve(head, pos, val) {
        if (pos === 0) {
            return new LLNode(val, head)
        }

        let prev = null
        let curr = head
        let newNode = new LLNode(val)

        for (let i = 0; i < pos; i++) {
            prev = curr
            curr = curr.next

        }

        prev.next = newNode
        newNode.next = curr

        return head
    }
}