class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        popped.reverse()
        stack = []
        for i in range(len(pushed)):
            stack.append(pushed[i])
            while stack and popped and stack[-1] == popped[-1]:
                stack.pop()
                popped.pop()

        return len(popped) == 0
