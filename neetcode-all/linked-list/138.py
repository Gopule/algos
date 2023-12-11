"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        ans = ListNode()
        dummy = ans
        refs = {}
        cur = head
        while cur:
            dummy.next = Node(cur.val, None, None)
            dummy = dummy.next
            refs[cur] = dummy
            cur = cur.next
        cur = head
        dummy = ans.next
        while cur:
            if not cur.random:
                dummy.random = None
            else:
                dummy.random = refs[cur.random]
            cur = cur.next
            dummy = dummy.next

        return ans.next
