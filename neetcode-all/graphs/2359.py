class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        def dfs(node, adj, dist):
            if node == -1 or node in adj:
                return
            adj[node] = dist
            dfs(edges[node], adj, dist + 1)

        adj1, adj2 = {}, {}

        dfs(node1, adj1, 0)
        dfs(node2, adj2, 0)

        min_dist = float("inf")
        res = -1

        for node in range(len(edges)):
            if node in adj1 and node in adj2:
                dist = max(adj1[node], adj2[node])
                if dist < min_dist:
                    min_dist = dist
                    res = node

        return -1 if min_dist == float("inf") else res
