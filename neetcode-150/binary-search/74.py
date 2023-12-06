class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
      block_size = len(matrix[0])
      total_len = block_size * len(matrix)
      l, r = 0, total_len - 1
      while l <= r:
        m = (l + r) // 2
        x = m // block_size
        y = m % block_size
        if matrix[x][y] == target:
          return True
        if matrix[x][y] < target:
          l = m + 1
        else:
          r = m - 1
      return False
