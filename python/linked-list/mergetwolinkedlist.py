class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        
        result = None
        
        while(l1 or l2):
            if l1 and l2:
                if l1.val <= l2.val:
                    t = ListNode(l1.val)
                    l1= l1.next
                else:

                    t = ListNode(l2.val)
                    l2= l2.next                    
            elif l1:
                t = ListNode(l1.val)
                l1= l1.next
            elif l2:
                t = ListNode(l2.val)
                l2= l2.next
                
            if result ==None:
                result = t
                p2= result
            else:
                p2.next = t
                p2= p2.next
            
        return result