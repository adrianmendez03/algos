def hasPathSum(self, root, targetSum: int):
    if root is None : return False
    
    targetSum -= root.val 
    
    if root.left is None and root.right is None:
        return targetSum == 0
    
    left = self.hasPathSum(root.left, targetSum)
    right = self.hasPathSum(root.right, targetSum)
    
    return left or right
        