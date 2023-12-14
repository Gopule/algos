class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class MyCircularQueue:

    def __init__(self, k: int):
        self.max_size = k
        self.size = 0
        self.head = None
        self.tail = None

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        new_node = ListNode(value)
        if not self.head:
            self.head = new_node
            self.tail = new_node
            self.size += 1
            return True
        self.tail.next = new_node
        self.tail = new_node
        self.size += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        self.head = self.head.next
        if self.head is None:
            self.tail = None
        self.size -= 1
        return True

    def Front(self) -> int:
        if not self.head:
            return -1
        return self.head.val

    def Rear(self) -> int:
        if not self.tail:
            return -1
        return self.tail.val

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.max_size
