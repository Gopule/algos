class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        trips = [[f, t, n] for n, f, t in trips]
        heapq.heapify(trips)
        q = []
        seats = 0
        while trips:
            fr, dest, n = heapq.heappop(trips)
            while q and fr >= q[0][0]:
                _, space = heapq.heappop(q)
                seats -= space

            seats += n
            heapq.heappush(q, [dest, n])
            if seats > capacity:
                return False
        return True
