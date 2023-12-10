class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        pFreq = Counter(p)
        runFreq = defaultdict(int)
        ans = []
        for i in range(len(s)):
            if i < len(p):
                runFreq[s[i]] += 1
                continue
            prevIndex = i - len(p)
            if runFreq == pFreq:
                ans.append(prevIndex)
            if runFreq[s[prevIndex]] == 1:
                runFreq.pop(s[prevIndex])
            else:
                runFreq[s[prevIndex]] -= 1
            runFreq[s[i]] += 1
        if runFreq == pFreq:
            ans.append(len(s) - len(p))

        return ans
