class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        def dfs(node):
            if node not in adj:
                return
            seen.add(node)
            for edge in adj[node]:
                if edge in seen:
                    continue
                dfs(edge)
            del adj[node]
            return node

        adj = defaultdict(list)
        for node, edge in edges:
            adj[node].append(edge)
            adj[edge].append(node)
        seen, count, node = set(), 0, 0
        while node < n:
            if node in seen:
                node += 1
                continue
            if node not in adj:
                count, node = count + 1, node + 1
                continue
            dfs(node)
            count, node = count + 1, node + 1

        return count
