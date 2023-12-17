# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        ans = []
        q = deque([(root, 0)])
        prev = 0
        sub = []
        while q:
            (node, level) = q.popleft()
            if level == prev:
                sub.append(node.val)
            else:
                ans.append(sub)
                sub = [node.val]
                prev = level
            if node.left:
                q.append((node.left, level + 1))
            if node.right:
                q.append((node.right, level + 1))
        ans.append(sub)
        return ans
