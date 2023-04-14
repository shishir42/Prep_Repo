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

const lcsMemorized = (x, y, n, m, dp) => {
    //base condition 
    if (n === 0 || m === 0) {
        return 0;
    }

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

const lcsTopDown = (x,y,m,n) =>{
    //Initialized 
    let dp = Array(m+1).fill().map(() => Array(n+1).fill());

    for(let i=0; i<m+1; i++){
        for(let j=0; j<n+1; j++){
            dp[i][j] = 0;
        }
    }

    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            if(x[i-1] === y[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[m][n];
}

console.log('LCS - Length of common subsequence top to bottom', lcsTopDown(x, y, x.length, y.length));


const longestCommonSubstring = (x,y,m,n) =>{
    //Initialized 
    let dp = new Array(m+1).fill().map(() => new Array(n+1).fill());
    let count = 0;
    for(let i=0; i<m+1; i++){
        for(let j=0; j<n+1; j++){
            if(i === 0 || j === 0){
                dp[i][j] = 0
            }
        }
    }

    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            if(x[i-1] === y[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
                count = Math.max(dp[i][j], count);
            }else{
                dp[i][j] = 0;
            }
        }
    }

    return count;
}

console.log('LCS - Length of common substring top to bottom', longestCommonSubstring(x, y, x.length, y.length));
