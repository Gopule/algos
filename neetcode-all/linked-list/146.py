class ListNode:
    def __init__(self, val, next, prev, key):
        self.val = val
        self.next = next
        self.prev = prev
        self.key = key

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.head = None
        self.tail = None
        self.map = {}

    def update_cache(self, node):
        if node is self.tail:
            return node.val
        elif node is self.head:
            self.head = self.head.next
            self.head.prev = None
        else:
            prev, next = node.prev, node.next
            next.prev = prev
            prev.next = next
        self.tail.next = node
        node.prev = self.tail
        self.tail = node
        node.next = None

    def get(self, key: int) -> int:
        if key in self.map:
            node = self.map[key]
            self.update_cache(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            node = self.map[key]
            node.val = value
            self.update_cache(node)
            return
        new_node = ListNode(value, None, self.tail, key)
        self.map[key] = new_node
        if self.cap == 0:
            last_used = self.head
            self.head = self.head.next
            self.map.pop(last_used.key)
        else:
            self.cap -= 1

        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

    # {1} <-> {2} <-> {3}


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
