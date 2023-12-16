# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, n1, n2):
        if not n1 and not n2:
            return True
        if not n1 or not n2:
            return False
        if n1.val != n2.val:
            return False
        return self.dfs(n1.left, n2.left) and self.dfs(n1.right, n2.right)

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root and not subRoot:
            return True
        if not root:
            return
        if root.val == subRoot.val:
            if self.dfs(root, subRoot):
                return True

        left = self.isSubtree(root.left, subRoot)
        right = self.isSubtree(root.right, subRoot)
        return left or right
