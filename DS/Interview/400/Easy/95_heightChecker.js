// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.


// Define an array of heights
const heights = [1,1,4,2,1,3];

// Create a function to check the number of students who need to move
function heightChecker(heights) {
  // Create a copy of the heights array and sort it in ascending order
  const sortedHeights = [...heights].sort((a, b) => a - b);

  // Initialize a counter for the number of students who need to move
  let numMoves = 0;

  // Loop through the original heights array and compare each height to the sorted heights
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      // If the height is not in the correct position, increment the counter
      numMoves++;
    }
  }

  // Return the number of students who need to move
  return numMoves;
}

// Call the function with the heights array and log the result to the console
console.log(heightChecker(heights)); // Output: 3
