// Given a rod of length n and a price list P where P[i] represents the price of a piece of length i, determine the maximum revenue that can be obtained by cutting the rod into smaller pieces and selling them.

function cutRod(capacity, lengths, prices, size) {

  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(capacity + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (lengths[i - 1] <= w) {
        dp[i][w] = Math.max(prices[i - 1] + dp[i][w - lengths[i - 1]], dp[i - 1][w]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];

}

const lengths = [1, 2, 3, 4, 5, 6, 7, 8];
const prices = [1, 5, 8, 9, 10, 17, 17, 20];
const n = 4;

const result = cutRod(lengths, prices, n, lengths.length);
// console.log(result);

//Max no of ways
//coin[]: [1,2,3]
//sum: 5

// 2+3 
// 1+2+2
// 1+1+3
// 1+1+1+1+1
// 1+1+1+2

//O/p : 5


const coinChangeI = (coinsArr, sum) => {
  const n = coinsArr.length;
  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(sum + 1).fill(0);
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (coinsArr[i - 1] <= j) {
        dp[i][j] = dp[i][j - coinsArr[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][sum];
}

console.log('coinChangeI ' + coinChangeI([1, 2, 3], 5));


//Min no of coins 
//coin[]: [1,2,3]
//sum: 5
// 2+3        No of coins - 2 (min.)
// 1+2+2      No of coins - 3
// 1+1+3      No of coins - 3
// 1+1+1+1+1  No of coins - 5
// 1+1+1+2    No of coins - 4
//O/P: 2


// dp[n+1][sum+1]
const coinChangeII = (coins, amount) => {
  // Create an array to store the minimum number of coins needed for each value up to `amount`
  const dp = new Array(amount + 1).fill(Infinity);

  // The minimum number of coins needed to make 0 is 0
  dp[0] = 0;

  // Iterate through all possible coin values up to `amount`
  for (let i = 1; i <= amount; i++) {
    // Iterate through all available coins
    for (let j = 0; j < coins.length; j++) {
      // If the current coin value is less than or equal to the current value of i,
      // calculate the minimum number of coins needed to make i using the current coin
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  // If dp[amount] is still Infinity, it means it's not possible to make `amount` with the given coins
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log('coinChangeII ' + coinChangeII([1, 2, 3], 5));
console.log('coinChangeII ' + coinChangeII([25, 10, 5], 30));
console.log('coinChangeII ' + coinChangeII([9, 6, 5, 1], 11));

