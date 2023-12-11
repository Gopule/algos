class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow, fast = head, head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        prev = None
        while slow:
            next_node = slow.next
            slow.next = prev
            prev = slow
            slow = next_node
        l, r = head, prev
        ans = 0
        while r:
            ans = max(l.val + r.val, ans)
            l = l.next
            r = r.next
        return ans
