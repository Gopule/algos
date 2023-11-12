class Solution:
    def inRange(self, char):
        viable = set("abcdefghijklmnopqrstuvwxyz0123456789")
        return char in viable

    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        left, right = 0, len(s) - 1
        while left < right:
            if self.inRange(s[left]) and self.inRange(s[right]):
                if s[left] != s[right]:
                    return False
                left += 1
                right -= 1
            else:
                if not self.inRange(s[left]):
                    left += 1
                if not self.inRange(s[right]):
                    right -= 1

        return True
