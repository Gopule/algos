class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        prev = prices[0]
        for i in range(1, len(prices)):
            potential_profit = prices[i] - prices[i - 1]
            if potential_profit > 0:
                profit += potential_profit
            prev = prices[i]
        return profit
