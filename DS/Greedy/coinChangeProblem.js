function coinChange(coins, target) {
    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;
    
    for (const coin of coins) {
      for (let i = coin; i <= target; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    
    return dp[target] === Infinity ? -1 : dp[target];
  }
  

const coins = [1,2,5], amount = 11;
// Output: 3
// Explanation: 11 = 5 + 5 + 1
console.log(coinChange(coins, amount));

