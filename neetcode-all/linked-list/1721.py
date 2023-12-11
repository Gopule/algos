class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        l, r = head, head
        for _ in range(k - 1):
            r = r.next
        first = r
        while r.next:
            l = l.next
            r = r.next
        second = l
        first.val, second.val = second.val, first.val
        return head
