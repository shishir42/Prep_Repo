// Water Bottles

// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

const numWaterBottles = (numBottles, numExchange) =>{
    let emptyBottles = 0;
    let totalDrank = 0;
    while(numBottles > 0){
        totalDrank += numBottles;
        emptyBottles += numBottles;
        numBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles -= numBottles * numExchange;
    }

    return totalDrank;
}

const numBottles = 15;
const numExchange = 4;
const maxDrank = numWaterBottles(numBottles, numExchange);
console.log(maxDrank); // prints 19

