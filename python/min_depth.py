def minDepth(self, root):
    if not root : return 0
    
    if not root.left and not root.right:
        return 1  
    
    left = self.minDepth(root.left) 
    right = self.minDepth(root.right) 
    
    if not right : return left + 1
    if not left : return right + 1
    else : return min(left,right)+1