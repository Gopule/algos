class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        max_num = -1
        for i in range(len(arr)-1,-1,-1):
            prev = arr[i]
            arr[i] = max_num
            max_num = max(max_num, prev)
        return arr
