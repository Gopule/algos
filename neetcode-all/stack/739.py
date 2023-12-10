class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ans = [0] * len(temperatures)
        stack = []
        for i in range(len(temperatures)):
            while stack and stack[-1][0] < temperatures[i]:
                temp, idx = stack.pop()
                ans[idx] = i - idx
            stack.append((temperatures[i], i))
        return ans
