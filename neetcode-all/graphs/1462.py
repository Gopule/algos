class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        def dfs(c, prereqs):
            if c in prereqs:
                return
            prereqs.add(c)
            for pre in pre_map[c]:
                dfs(pre, prereqs)
            return prereqs

        pre_map = defaultdict(list)
        for c, p in prerequisites:
            pre_map[c].append(p)

        prereqs = {}
        for c in range(numCourses):
            c_pre = dfs(c, set())
            prereqs[c] = c_pre

        for i, query in enumerate(queries):
            c, p = query
            queries[i] = p in prereqs[c]
        return queries
