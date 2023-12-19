# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        q = deque([(root, 0)])
        ans = 0
        while q:
            dist = q[-1][1] - q[0][1] + 1
            ans = max(ans, dist)
            for _ in range(len(q)):
                node, pos = q.popleft()
                if node.left:
                    q.append((node.left, pos * 2))
                if node.right:
                    q.append((node.right, pos * 2 + 1))
        return ans
