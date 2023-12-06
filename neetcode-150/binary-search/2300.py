class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        ans = []
        potions.sort()
        for i in range(len(spells)):
            l, r = 0, len(potions) - 1
            length = len(ans)
            while l <= r:
                m = (l + r) // 2
                product = spells[i] * potions[m]
                if product >= success:
                    if m - 1 < 0 or potions[m-1] * spells[i] < success:
                        ans.append(len(potions) - m)
                        break
                    r = m - 1
                else:
                    l = m + 1
            if len(ans) == length:
                ans.append(0)
        return ans
