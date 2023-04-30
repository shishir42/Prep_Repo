// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

function minimumAbsDifference(arr) {
    arr.sort((a, b) => a - b);
    
    let minDiff = Infinity;
    let pairs = [];
    
    for (let i = 1; i < arr.length; i++) {
      const diff = arr[i] - arr[i - 1];
      
      if (diff < minDiff) {
        minDiff = diff;
        pairs = [[arr[i - 1], arr[i]]];
      } else if (diff === minDiff) {
        pairs.push([arr[i - 1], arr[i]]);
      }
    }
    
    return pairs;
  }

  
  const arr = [4, 2, 1, 3];

  const pairs = minimumAbsDifference(arr);
  
  console.log(pairs); // prints [[1, 2], [2, 3], [3, 4]]
   