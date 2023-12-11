class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False
        slow, fast = head, head.next
        while fast and fast.next:
            if slow is fast:
                return True
            slow = slow.next
            fast = fast.next.next
        return False

    # def hasCycle(self, head: Optional[ListNode]) -> bool:
    #     while head:
    #         if head.val is None:
    #             return True
    #         head.val = None
    #         head = head.next
    #     return False
