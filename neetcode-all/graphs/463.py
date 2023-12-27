class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        def dfs(i, j, count):
            if i >= 0 and i < len(grid) and j >= 0 and j < len(grid[0]) and grid[i][j] is None:
                return 0
            if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] == 0:
                return 1
            grid[i][j] = None
            up = dfs(i - 1, j, count)
            down = dfs(i + 1, j, count)
            left = dfs(i, j - 1, count)
            right = dfs(i, j + 1, count)
            return up + down + left + right

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                cell = grid[i][j]
                if grid[i][j]:
                    return dfs(i, j, 0)
