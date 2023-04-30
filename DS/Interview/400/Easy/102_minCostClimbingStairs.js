// Topics: Array;Dynamic Programming
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Initialize the costs array with the first and second costs
    const costs = [cost[0], cost[1]];
    
    // Loop through each cost starting from the third cost
    for (let i = 2; i < cost.length; i++) {
      // Calculate the minimum cost to reach the current step
      const minCost = Math.min(costs[i-1], costs[i-2]) + cost[i];
      costs.push(minCost);
    }
    
    // Return the minimum cost to reach the top step
    return Math.min(costs[costs.length-1], costs[costs.length-2]);
  };

  console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
  console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Output: 6
    