class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        q = deque()
        DIR = [[0,1], [1,0], [0,-1], [-1,0]]
        seen = set()
        for r in range(len(rooms)):
            for c in range(len(rooms[0])):
                if rooms[r][c] == 0:
                    q.append([r, c, 0])
                    seen.add((r, c))

        while q:
            for _ in range(len(q)):
                r, c, dist = q.popleft()
                for dr, dc in DIR:
                    row, col = r + dr, c + dc
                    if row < 0 or col < 0 or row == len(rooms) or col == len(rooms[0]) or (row, col) in seen or rooms[row][col] == -1:
                        continue
                    seen.add((row, col))
                    rooms[row][col] = dist + 1
                    q.append([row, col, dist + 1])
