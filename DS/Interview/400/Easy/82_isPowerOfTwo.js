// Power of Two
// Input: n = 1
// Output: true
// Explanation: 2 power 0 = 1

// Input: n = 16
// Output: true
// Explanation: 2 power 4 = 16

function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
    while (n > 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n /= 2;
    }
    return true;
  }

  console.log(isPowerOfTwo(16));