// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

const lastStoneWeight = (stones) =>{
    // Sort the stones array in descending order
    stones.sort((a,b)=> b-a);
    while(stones.length > 1){
        // Remove the two heaviest stones
        const stone1 = stones.shift();
        const stone2 = stones.shift();

        // Calculate the difference and add the result back to the array
        const diff = stone1-stone2;
        if(diff>0){
            stones.push(diff);
            stones.sort((a,b)=> b-a);
        }
    }
    return stones.length? stones[0] : 0;
}

console.log(lastStoneWeight([2,7,4,1,8,1]));