# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        before, after = ListNode(), ListNode()
        l, r = before, after
        cur = head
        while cur:
            if cur.val >= x:
                r.next = cur
                r = r.next
            else:
                l.next = cur
                l = l.next
            cur = cur.next

        if r and r.next:
            r.next = None
        l.next = after.next
        return before.next

    # {0} -> {1} -> {2} -> {2} -> None
    # {0} -> {4} -> {3} -> {5} -> None
    # def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    #     before, after = [], []
    #     cur = head
    #     while cur:
    #         if cur.val >= x:
    #             after.append(cur)
    #         else:
    #             before.append(cur)
    #         cur = cur.next
    #     ans = ListNode()
    #     dummy = ans
    #     for node in before:
    #         dummy.next = node
    #         node.next = None
    #         dummy = dummy.next
    #     for node in after:
    #         dummy.next = node
    #         node.next = None
    #         dummy = dummy.next
    #     return ans.next
