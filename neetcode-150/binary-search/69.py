class Solution:
    def mySqrt(self, x: int) -> int:
        l, r = 0, x
        while l <= r:
            m = (l + r) // 2
            power = m * m
            if power == x:
                return m
            if power > x:
                r = m - 1
            else:
                l = m + 1
        return r
