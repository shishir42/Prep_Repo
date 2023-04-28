// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Topics: Math;Dynamic Programming;Memoization

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) =>{
    //base case
    if(n<0){
        return 0;
    }else if(n<=1){
        return 1;
    }

    // Use dynamic programming to calculate the number of ways to climb stairs
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

// We first handle the base cases, which are when n is less than or equal to 1. When n is 0, there is only one way to climb the stairs (by doing nothing). When n is 1, there is only one way to climb the stairs (by taking one step).

// We then use dynamic programming to calculate the number of ways to climb the stairs for n greater than 1. We create an array dp of size n+1, where dp[i] represents the number of ways to climb i stairs.

// We initialize dp[0] and dp[1] to 1, since there is only one way to climb 0 or 1 stairs.

// We then use a loop to calculate dp[i] for i from 2 to n. We use the formula dp[i] = dp[i-1] + dp[i-2], which represents the number of ways to climb i stairs by either taking one step from i-1 stairs or by taking two steps from i-2 stairs.

// Finally, we return dp[n], which represents the number of distinct ways to climb to the top.

console.log(climbStairs(2));