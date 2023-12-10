class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for astroid in asteroids:
            if not stack:
                stack.append(astroid)
                continue
            if (stack[-1] < 0 and astroid > 0) or (stack[-1] > 0 and astroid < 0):
                prev = abs(stack[-1])
                while stack and abs(astroid) >= abs(stack[-1]):
                    top = stack.pop()
                    prev = abs(top)
                    if abs(astroid) == prev:
                        break
                if astroid > prev:
                    stack.append(astroid)
            else:
                stack.append(astroid)
        return stack
