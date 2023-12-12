# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ans = ListNode()
        cur = ans
        while head:
            if head.next:
                left, right = head, head.next
                next_node = right.next

                right.next, left.next, cur.next = left, next_node, right

                cur, head = cur.next.next, next_node
            else:
                cur.next = head
                cur, head = cur.next, head.next
        return ans.next
