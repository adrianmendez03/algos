def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
    if root is None : return 
    
    q = [root]
    res = []
    
    while len(q) > 0:
        section = []
        for i in range(len(q)):
            temp = q.pop(0)
            section.append(temp.val)
            if temp.left: 
                q.append(temp.left)
            if temp.right: 
                q.append(temp.right)
        res.append(section)
    return res[::-1]