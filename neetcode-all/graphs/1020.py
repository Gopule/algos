class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        def not_in_range(r, c):
            return r < 0 or c < 0 or r == len(grid) or c == len(grid[0])

        def dfs(r, c):
            nonlocal count
            if not_in_range(r, c):
                return False
            if grid[r][c] == 0:
                return True

            grid[r][c] = 0

            down = dfs(r+1, c)
            up = dfs(r-1, c)
            right = dfs(r, c+1)
            left = dfs(r, c-1)
            count += 1
            return down and up and right and left

        res = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    count = 0
                    if dfs(r, c):
                        res += count
        return res
