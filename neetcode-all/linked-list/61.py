class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head:
            return head
        size = 0
        cur = head
        l, r = head, head
        while cur:
            if size == k:
                r = cur
            cur = cur.next
            size += 1

        if r is head:
            k %= size
            while k > 0:
                k -= 1
                r = r.next
        while r.next:
            r = r.next
            l = l.next

        r.next = head
        ans = l.next
        l.next = None
        return ans
