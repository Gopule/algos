class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        visited = set()
        ans = set()
        running = ""
        for char in s:
            if len(running) < 10:
                running += char
                if len(running) == 10:
                    visited.add(running)
                continue
            running = running[1:] + char
            if running in visited:
                ans.add(running)
            visited.add(running)

        return ans
