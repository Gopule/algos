def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
    avg_sum = threshold * k
    total, ans = 0, 0
    for i in range(len(arr)):
        total += arr[i]
        if i >= k:
            total -= arr[i - k]
        if total >= avg_sum and i >= k - 1:
            ans += 1
    return ans
