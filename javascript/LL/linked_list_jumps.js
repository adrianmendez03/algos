class Solution {
    solve(node) {
        const head = node
        let curr = head
        while (curr && curr.next) {
            const jump = curr.val
            let temp = curr
            for (let i = 0; i < jump; i++) {
                if (temp) {
                    temp = temp.next
                }
            }
            curr.next = temp
            curr = curr.next
        }
        return head
    }
}