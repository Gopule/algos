class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        while head:
            if head.val is None:
                return True
            head.val = None
            head = head.next
        return False
