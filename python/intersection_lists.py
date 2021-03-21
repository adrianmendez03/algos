class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        
        nodeA = headA
        nodeB = headB
        
        nodes = set()
        
        while nodeA:
            nodes.add(nodeA)
            nodeA = nodeA.next
            
        while nodeB:
            if nodeB in nodes:
                return nodeB
            nodeB = nodeB.next
            
        return None