class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        arr = []
        cur = head
        while cur:
            arr.append(cur)
            cur = cur.next
        arr[k-1], arr[-k] = arr[-k], arr[k-1]
        ans = ListNode()
        dummy = ans
        for node in arr:
            dummy.next = node
            dummy = dummy.next
            dummy.next = None
        return ans.next
