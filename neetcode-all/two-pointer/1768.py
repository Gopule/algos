class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        ans = ""
        i = 0
        while i < len(word1) and i < len(word2):
            ans += word1[i]
            ans += word2[i]
            i += 1
        leftover = word1[i:] if i < len(word1) else word2[i:]
        ans += leftover
        return ans
