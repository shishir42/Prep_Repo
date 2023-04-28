// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Topics: Math;Dynamic Programming;Recursion;Memoization

var fib = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};


const memo = {};

var fib_memo = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (memo[n]) {
        return memo[n];
    } else {
        const result = fib(n - 1) + fib(n - 2);
        memo[n] = result;
        return result;
    }
};

var fib_dp = function(n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

console.log(fib(2));
console.log(fib_memo(2));
console.log(fib_dp(2));