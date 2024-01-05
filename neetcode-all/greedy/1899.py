class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last_idx = {}
        for i, c in enumerate(s):
            last_idx[c] = i

        res = []
        end, size = 0, 0

        for i, c in enumerate(s):
            jump_idx = last_idx[c]
            size += 1
            end = jump_idx if jump_idx > end else end
            if i == end:
                res.append(size)
                size = 0
        return res
