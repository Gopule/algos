# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    #     res = []
    #     def dfs(node):
    #         if not node:
    #             return
    #         dfs(node.left)
    #         dfs(node.right)
    #         res.append(node.val)
    #     dfs(root)
    #     return res

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, stack, seen = [], [root], set()
        while stack and root:
            top = stack[-1]
            if top.left and top.left not in seen:
                seen.add(top.left)
                stack.append(top.left)
            elif top.right and top.right not in seen:
                seen.add(top.right)
                stack.append(top.right)
            else:
                stack.pop()
                res.append(top.val)

        return res
