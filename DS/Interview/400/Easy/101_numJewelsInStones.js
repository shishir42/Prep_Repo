var numJewelsInStones = function(jewels, stones) {
    let count = 0;
     for(let i = 0; i < stones.length; i++){
         if(jewels.includes(stones[i])){
             count++;
         }
     }
 
     return count; 
 };

//  Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones_hashmap = function(jewels, stones) {
    // Create a hash map to store the frequency of each stone
    const stoneFreq = {};
    
    // Loop through each stone in stones
    for (let i = 0; i < stones.length; i++) {
      // Increment the frequency of the current stone in the hash map
      stoneFreq[stones[i]] = (stoneFreq[stones[i]] || 0) + 1;
    }
    
    // Initialize a counter to keep track of the number of jewels in stones
    let count = 0;
    
    // Loop through each jewel in jewels
    for (let j = 0; j < jewels.length; j++) {
      // If the current jewel is in the stoneFreq hash map, increment the counter
      if (stoneFreq[jewels[j]]) {
        count += stoneFreq[jewels[j]];
      }
    }
    
    // Return the total number of jewels in stones
    return count;
  };
  

  console.log(numJewelsInStones_hashmap('aA', 'aAAbbbb'));