class Solution:
    def checkMove(self, board: List[List[str]], rMove: int, cMove: int, color: str) -> bool:
        rev_color = "B" if color == "W" else "W"
        DIR = [[0,1],[1,0],[-1,0],[0,-1],[-1,-1],[1,1],[-1,1],[1,-1]]
        q = deque()

        for coord in DIR:
            dr, dc = coord
            q.append({"coord": coord, "cell": [dr + rMove, dc + cMove], "moves": 2})

        while q:
            for i in range(len(q)):
                data = q.popleft()
                moves = data["moves"]
                r, c = data["cell"]
                dr, dc = data["coord"]
                if r < 0 or c < 0 or r >= len(board) or c >= len(board[0]) or (board[r][c] == color and moves < 3) or board[r][c] == ".":
                    continue
                cell_color = board[r][c]
                if cell_color == color and moves >= 3:
                    return True
                elif cell_color == rev_color:
                    q.append({"coord": data["coord"], "cell": [r + dr, c + dc], "moves": moves + 1})

        return False
