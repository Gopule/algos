# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        if not root:
            return root

        max_depth = 0
        max_val = root.val
        def dfs(node, depth):
            nonlocal max_depth, max_val
            if not node:
                return
            depth += 1
            dfs(node.left, depth)
            if depth > max_depth:
                max_depth = depth
                max_val = node.val
            dfs(node.right, depth)

        dfs(root, 0)
        return max_val
