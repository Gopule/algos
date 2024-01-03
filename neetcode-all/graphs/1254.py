class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        def not_in_range(r, c):
            return r < 0 or c < 0 or r == len(grid) or c == len(grid[0])

        def dfs(r, c):
            if not_in_range(r, c):
                return False
            if grid[r][c] == 1:
                return True
            grid[r][c] = 1

            down = dfs(r+1, c)
            up = dfs(r-1, c)
            right = dfs(r, c+1)
            left = dfs(r, c-1)
            return up and down and right and left

        res = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 0:
                    if dfs(r, c):
                        res += 1

        return res
