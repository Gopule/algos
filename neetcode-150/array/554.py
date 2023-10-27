class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        edges = defaultdict(int)
        max_edges = 0
        for row in wall:
            edge = 0
            for i in range(len(row)):
                if i == len(row) - 1: continue
                brick = row[i]
                edge += brick
                edges[edge] += 1
                max_edges = max(max_edges, edges[edge])

        return len(wall) - max_edges
