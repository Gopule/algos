class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head:
            return head
        size, cur = 0, head
        while cur:
            cur = cur.next
            size += 1
        nth = size - n + 1
        count, cur, prev = 1, head, None
        while cur:
            if count == nth:
                if not prev:
                    return cur.next
                prev.next = cur.next
                return head
            prev = cur
            cur = cur.next
            count += 1

        return head
