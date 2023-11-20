class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set("aeiou")
        total, ans = 0, 0
        for r in range(len(s)):
            if s[r] in vowels:
                total += 1
            if r >= k and s[r - k] in vowels:
                total -= 1
            ans = max(ans, total)

        return ans
