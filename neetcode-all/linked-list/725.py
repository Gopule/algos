# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        size = 0
        cur = head
        while cur:
            size += 1
            cur = cur.next
        remainder = size % k
        splits = size // k
        ans = []
        cur = head
        for _ in range(k):
            link = ListNode()
            pnt = link
            for _ in range(splits + (1 if remainder > 0 else 0)):
                pnt.next = cur
                pnt = pnt.next
                cur = cur.next
            pnt.next = None
            ans.append(link.next)
            remainder -= 1
        return ans
