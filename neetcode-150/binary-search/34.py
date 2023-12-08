class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) - 1
        left, right = -1, -1
        while l <= r:
            m = (l + r) // 2
            if nums[m] == target and (m - 1 < 0 or nums[m-1] != nums[m]):
                left = m
                break
            if nums[m] < target:
                l = m + 1
            else:
                r = m - 1
        if left == -1:
            return [left, right]
        l, r = 0, len(nums) - 1
        while l <= r:
            m = (l + r) // 2
            if nums[m] == target and (m + 1 == len(nums) or nums[m+1] != nums[m]):
                right = m
                break
            if nums[m] > target:
                r = m - 1
            else:
                l = m + 1

        return [left, right]
