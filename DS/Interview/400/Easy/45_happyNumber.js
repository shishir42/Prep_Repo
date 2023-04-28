// Topics: Hash Table;Math;Two Pointers

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

const isHappyNumber = (num) => {
    const seen = new Set();
    while (num != 1 && !seen.has(num)) {
        seen.add(num);
        num = sumOfSquares(num);
    }
    return num === 1;

}

function isHappyNumber_TwoPointers(num) {
    // Use slow-fast pointer approach to detect cycles
    let slow = num, fast = num;
    do {
      slow = sumOfSquares(slow);
      fast = sumOfSquares(sumOfSquares(fast));
      if (fast === 1) {
        return true;
      }
    } while (slow !== fast);
  
    return false;
  }
  

function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(isHappyNumber(19)); // true
console.log(isHappyNumber_TwoPointers(19)); // true
// console.log(isHappyNumber(7)); // true
// console.log(isHappyNumber(4)); // false