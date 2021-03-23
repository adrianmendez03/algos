class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if head is None or head.next is None : return head
        
        curr = head
        
        while curr != None:
            if not curr.next:
                break
            
            nxt = curr.next
            temp = curr.val
            curr.val = nxt.val
            nxt.val = temp
            
            curr = curr.next.next 
                            
        
        return head