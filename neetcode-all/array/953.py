class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        order_map = {}
        for i, c in enumerate(order):
            order_map[c] = i

        for i in range(1, len(words)):
            w1, w2 = words[i-1], words[i]
            for j in range(len(w1)):
                if j == len(w2):
                    return False
                if order_map[w1[j]] > order_map[w2[j]]:
                    return False
                elif order_map[w1[j]] < order_map[w2[j]]:
                    break
        return True

    # def isAlienSorted(self, words: List[str], order: str) -> bool:
    #     order_map = {}
    #     for i in range(len(order)):
    #         order_map[order[i]] = i
    #     for i in range(1, len(words)):
    #         w1, w2 = words[i-1], words[i]
    #         i = 0
    #         while i < len(w1) and i < len(w2):
    #             if order_map[w1[i]] > order_map[w2[i]]:
    #                 return False
    #             elif order_map[w1[i]] < order_map[w2[i]]:
    #                 break
    #             elif order_map[w1[i]] == order_map[w2[i]]:
    #                 i += 1
    #         if i < len(w1) and i >= len(w2):
    #             return False
    #     return True
