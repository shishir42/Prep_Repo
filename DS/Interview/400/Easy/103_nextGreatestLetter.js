// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // Initialize the left and right pointers
    let left = 0;
    let right = letters.length - 1;
    
    // Check if the target is greater than or equal to the last letter
    if (target >= letters[right]) {
      return letters[0];
    }
    
    // Loop while the left pointer is less than or equal to the right pointer
    while (left <= right) {
      // Calculate the middle index
      const middle = Math.floor((left + right) / 2);
      
      // If the middle letter is greater than or equal to the target, move the right pointer
      if (letters[middle] <= target) {
        left = middle + 1;
      } else { // If the middle letter is less than the target, move the left pointer
        right = middle - 1;
      }
    }
    
    // The smallest letter greater than the target is the letter at the left pointer
    return letters[left];
  };
  
  console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')); // Output: c
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')); // Output: f
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd')); // Output: f
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g')); // Output: j
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j')); // Output: c
console.log(nextGreatestLetter(['c', 'f', 'j'], 'k')); // Output: c