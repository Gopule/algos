class MyHashMap:

    def __init__(self):
        self.map = [None] * (10 ** 6)

    def put(self, key: int, value: int) -> None:
        idx = key % len(self.map)
        slot = self.map[idx]
        if not slot:
            self.map[idx] = [[key, value]]
            return
        for i in range(len(slot)):
            k, _ = slot[i]
            if k == key:
                slot[i][1] = value
                return
        slot.append([key, value])

    def get(self, key: int) -> int:
        idx = key % len(self.map)
        slot = self.map[idx]
        if not slot:
            return -1
        print(slot)
        for k, v in slot:
            if k == key:
                return v
        return -1

    def remove(self, key: int) -> None:
        idx = key % len(self.map)
        slot = self.map[idx]
        if not slot:
            return
        for i in range(len(slot)):
            k, v = slot[i]
            if k == key:
                slot.pop(i)
                return
