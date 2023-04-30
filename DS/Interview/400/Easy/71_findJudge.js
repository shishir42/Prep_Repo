/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // Initialize an array of size N+1 with all values set to 0
    const trustCounts = new Array(N+1).fill(0);
    
    // Loop through the trust array and increment the trust count for each person
    // that is trusted and decrement the trust count for each person that trusts someone
    for (const [trustee, truster] of trust) {
        trustCounts[truster]--;
        trustCounts[trustee]++;
    }
    
    // Loop through the trustCounts array to find the person who is trusted by everyone
    for (let i = 1; i <= N; i++) {
        if (trustCounts[i] === N - 1) {
            return i;
        }
    }
    
    // If no such person is found, return -1
    return -1;
};

// Example input
const N = 4;
const trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];
const judge = findJudge(N, trust);
console.log(judge); // Output: 3

// In the example input, the N variable is set to 4, and the trust array contains the pairs [[1,3],[1,4],[2,3],[2,4],[4,3]]. The function first updates the trustCounts array as follows:

// trustCounts = [0, 2, 0, 3, -2]
