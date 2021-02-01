def isBalanced(self, root):
    def helper(node):
        if node == None:
            return (0, True)

        l_height, l_balance = helper(node.left)
        r_height, r_balance = helper(node.right)

        return (max(l_height, r_height) + 1, l_balance and r_balance and abs(l_height - r_height) <= 1)

    return helper(root)[-1]