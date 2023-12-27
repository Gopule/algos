class Solution:
    def reorganizeString(self, s: str) -> str:
        freqs = Counter(s)
        heap = []
        for char, freq in freqs.items():
            heap.append([-freq, char])

        heapq.heapify(heap)
        res = []
        while heap:
            if abs(heap[0][0]) > 1 and len(heap) == 1:
                return ""

            if len(heap) > 1 and heap[0][0] < heap[1][0]:
                freq1, char1 = heapq.heappop(heap)
                freq2, char2 = heapq.heappop(heap)
                res.append(char1)
                res.append(char2)
                freq1, freq2 = freq1 + 1, freq2 + 1
                if freq2 < 0:
                    heapq.heappush(heap, [freq2, char2])
                heapq.heappush(heap, [freq1, char1])
            else:
                freq, char = heapq.heappop(heap)
                res.append(char)
                freq += 1
                if freq < 0:
                    heapq.heappush(heap, [freq, char])

        return "".join(res)
