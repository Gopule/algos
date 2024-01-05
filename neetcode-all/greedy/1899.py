class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        x, y, z = target
        i, j, k = 0, 0, 0
        for trip in triplets:
            a, b, c = trip
            if a > x or b > y or c > z:
                continue
            if a == x and (b <= y and c <= z):
                i = a
            if b == y and (a <= x and c <= z):
                j = b
            if c == z and (a <= x and b <= y):
                k = c

        return i == x and j == y and k == z
