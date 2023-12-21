# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        total = 0
        def dfs(node):
            nonlocal total
            if not node:
                return
            dfs(node.right)
            node.val += total
            total = node.val
            dfs(node.left)
        dfs(root)
        return root

    # def inorder(self, node: Optional[TreeNode], nodes: List[int]) -> List[int]:
    #     if not node:
    #         return
    #     self.inorder(node.left, nodes)
    #     nodes.append(node.val)
    #     self.inorder(node.right, nodes)
    #     return nodes

    # def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    #     if not root: return
    #     inorder = self.inorder(root, [])
    #     for i in range(len(inorder) - 2, -1, -1):
    #         inorder[i] += inorder[i + 1]
    #     idx = 0
    #     def dfs(node):
    #         nonlocal idx
    #         if not node:
    #             return
    #         dfs(node.left)
    #         node.val = inorder[idx]
    #         idx += 1
    #         dfs(node.right)
    #     dfs(root)
    #     return root
