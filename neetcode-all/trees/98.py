# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        prev = None
        def dfs(node):
            nonlocal prev
            if not node:
                return True

            left = dfs(node.left)
            if prev and prev.val >= node.val:
                return False
            prev = node
            right = dfs(node.right)
            return left and right

        return dfs(root)
