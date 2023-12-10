class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        l, ans = 0, 0
        for char in s:
            if char in seen:
                while s[l] != char:
                    seen.remove(s[l])
                    l += 1
                seen.remove(s[l])
                l += 1
            seen.add(char)
            ans = max(ans, len(seen))

        return ans
