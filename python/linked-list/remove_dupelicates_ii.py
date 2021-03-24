class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if head == None or head.next == None : return head
            
        prev = ListNode(0, head)
        curr = head
        newHead = prev
        
        while curr != None and curr.next != None:
            if curr.val == curr.next.val:
                curr = self.findNoneDupe(curr.next)
                prev.next = curr
            else: 
                curr = curr.next
                prev = prev.next
            
        return newHead.next
    
    def findNoneDupe(self, node: ListNode) -> ListNode:
        value = node.val
        while node != None:
            if node.val != value:
                break
            node = node.next
        return node