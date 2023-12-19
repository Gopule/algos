# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        q = deque([root])
        prev = True
        while q:
            for i in range(len(q)):
                node = q.popleft()
                if node.left:
                    if not prev:
                        return False
                    q.append(node.left)
                    prev = node.left
                else:
                    prev = None
                if node.right:
                    if not prev:
                        return False
                    q.append(node.right)
                    prev = node.right
                else:
                    prev = None

        return True
