// Count Odd Numbers in an Interval Range

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

const countOdds = (low, high) =>{
    // Calculate the number of integers in the range.
    const numIntegers = high-low+1;
    const numOdds = Math.floor(numIntegers / 2);
    if(low % 2 !== 0 || high % 2 !==0){
        return numOdds+1;
    }else{
        return numOdds;
    }
}

console.log(countOdds(3, 7));