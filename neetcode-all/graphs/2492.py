class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        def dfs(node):
            seen.add(node)
            for neighbor, dist in adj[node]:
                self.res = min(self.res, dist)
                if neighbor in seen: continue
                dfs(neighbor)


        adj = defaultdict(list)
        for u, v, weight in roads:
            adj[u].append([v, weight])
            adj[v].append([u, weight])

        seen = set()
        self.res = float("inf")
        dfs(1)
        return self.res
