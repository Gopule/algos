class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        def dfs(pos, target, sub):
            if target == 0:
                res.append(sub.copy())
                return
            if target < 0:
                return
            for i in range(pos, len(candidates)):
                sub.append(candidates[i])
                dfs(i, target - candidates[i], sub)
                sub.pop()

        dfs(0, target, [])
        return res
