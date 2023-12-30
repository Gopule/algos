class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        def not_in_bounds(r, c):
            return r < 0 or c < 0 or c == len(grid[0]) or r == len(grid)

        if grid[0][0] != 0:
            return -1
        if len(grid) == 1 and len(grid[0]) == 1 and grid[0][0] == 0:
            return 1

        DIR = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]]
        q = deque([(0,0,1)])

        while q:
            for _ in range(len(q)):
                r, c, steps = q.popleft()
                for dr, dc in DIR:
                    row, col = r + dr, c + dc
                    if not_in_bounds(row, col) or grid[row][col] == 1:
                        continue
                    if row == len(grid) - 1 and col == len(grid[0]) - 1 and grid[row][col] == 0:
                        return steps + 1
                    grid[row][col] = 1
                    q.append((row, col, steps + 1))

        return -1
