// The problem of finding the best time to buy and sell a stock to maximize profit can be solved in linear time complexity using a greedy approach. Here's an implementation in JavaScript:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Topics: Array;Dynamic Programming

const maxProfit = (prices) =>{
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++){
        const price = prices[i];
        if(price < minPrice){
            minPrice = price;
        }else if(price - minPrice > maxProfit){
            maxProfit = price-minPrice;
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

const maxProfitUsingDp = (prices) =>{
    const n = prices.length;
    if(n < 2){
        return 0;
    }

    const dp = new Array(n).fill(0);
    let minPrice = prices[0];

    for(let i=1; i<n; i++){
        dp[i] = Math.max(dp[i-1], prices[i]-minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return dp[n-1];
}

console.log(maxProfitUsingDp([7,1,5,3,6,4]));
console.log(maxProfitUsingDp([7,6,4,3,1]));