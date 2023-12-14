# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = head
        while cur:
            if cur.next and cur.next.val < cur.val:
                next_node = cur.next.next
                swap_node = cur.next
                if swap_node.val < head.val:
                    swap_node.next = head
                    head = swap_node
                else:
                    node = head
                    while node.next and node.next.val < swap_node.val:
                        node = node.next
                    after_node = node.next
                    node.next = swap_node
                    swap_node.next = after_node
                cur.next = next_node
            else:
                cur = cur.next
        return head
