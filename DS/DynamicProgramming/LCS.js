//input string x, string y, length(x), length(y)
//https://leetcode.com/problems/longest-common-subsequence/
// x: a, b, c, d, g, h
// y: a, b, e, d, f, h, r
// O/p: 4

const lcsRecursive = (x, y, n, m) => {
    //base condition 
    if (n === 0 || m === 0) return 0;

    if (x[n - 1] === y[m - 1]) {
        return 1 + lcsRecursive(x, y, n - 1, m - 1);
    } else {
        return Math.max(lcsRecursive(x, y, n - 1, m), lcsRecursive(x, y, n, m - 1));
    }
}

const x = 'abcdgh';
const y = 'abedfhr';

console.log('LCS - Length of common subsequence ', lcsRecursive(x, y, x.length, y.length));

console.log('********************************');

const lcsMemorized = (x, y, n, m, dp) => {
    //base condition 
    if (n === 0 || m === 0) {
        return 0;
    }

    //memorized 
    // dp = dp || {};

    // const memoKey = `${n}-${m}`;
    // if (dp[memoKey]) {
    //     return dp[memoKey];
    // }

    if (dp[n][m] !== -1) {
        return dp[n][m];
    }

    // Choice 
    if (x[n - 1] === y[m - 1]) {
        dp[n][m] = 1 + lcsMemorized(x, y, n - 1, m - 1, dp);
    } else {
        dp[n][m] = Math.max(lcsMemorized(x, y, n - 1, m, dp), lcsRecursive(x, y, n, m - 1, dp));
    }

    return dp[n][m];
}

const dpLCS = new Array(x.length + 1).fill(-1).map(() => new Array(y.length + 1).fill(-1));
// 5 is the number of rows and 4 is the number of columns.

console.log('LCS - Length of common subsequence memorized', lcsMemorized(x, y, x.length, y.length, dpLCS));
