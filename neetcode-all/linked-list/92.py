class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head:
            return None
        start = ListNode()
        cur = head
        count = 1
        prev = None
        first = None
        while cur and count <= right:
            next_node = cur.next
            if count < left:
                start.next = cur
                start = start.next
            else:
                if count == left:
                    first = cur
                cur.next = prev
                prev = cur

            cur = next_node
            count += 1
        start.next = prev
        first.next = cur
        if left == 1:
            return prev
        return head
