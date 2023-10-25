class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        s = s.split(" ")
        if len(pattern) != len(s): return False
        mapping = {}
        visited = set()
        for i in range(len(s)):
            if pattern[i] in mapping and mapping[pattern[i]] != s[i]:
                return False
            if pattern[i] not in mapping and s[i] in visited:
                return False

            mapping[pattern[i]] = s[i]
            visited.add(s[i])

        return True
