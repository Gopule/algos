class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        max_heap = []
        for n in nums:
            n = int(n)
            heapq.heappush(max_heap, n)
            if len(max_heap) > k:
                heapq.heappop(max_heap)

        return str(max_heap[0])
