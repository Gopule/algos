class Solution:
  def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
      seen = set()

      for i in range(0, min(0 + k + 1, len(nums))):
          if nums[i] in seen:
              return True
          seen.add(nums[i])
      seen.remove(nums[0])

      for i in range(k + 1, len(nums)):
          if nums[i] in seen:
              return True
          seen.add(nums[i])
          seen.remove(nums[i - k])

      return False

  def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
      seen = set()

      for i, num in enumerate(nums):
          if num in seen:
              return True
          seen.add(num)
          if len(seen) > k:
              seen.remove(nums[i-k])

      return False
