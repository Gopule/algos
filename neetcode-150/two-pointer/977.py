class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        ans = [0] * len(nums)
        i = len(ans) - 1
        l, r = 0, len(nums) - 1
        while l <= r:
            if abs(nums[l]) > abs(nums[r]):
                ans[i] = nums[l] * nums[l]
                l += 1
            else:
                ans[i] = nums[r] * nums[r]
                r -= 1
            i -= 1
        return ans


# class Solution:
#     def sortedSquares(self, nums: List[int]) -> List[int]:
#         i = 0
#         while i < len(nums):
#             if nums[i] >= 0:
#                 break
#             i += 1

#         l, r = i - 1, i
#         ans = []
#         while r < len(nums) and l >= 0:
#             if abs(nums[l]) < abs(nums[r]):
#                 ans.append(nums[l] * nums[l])
#                 l -= 1
#             else:
#                 ans.append(nums[r] * nums[r])
#                 r += 1
#         if l >= 0:
#             while l >= 0:
#                 ans.append(nums[l] * nums[l])
#                 l -= 1
#         if r < len(nums):
#              while r < len(nums):
#                 ans.append(nums[r] * nums[r])
#                 r += 1

#         return ans
