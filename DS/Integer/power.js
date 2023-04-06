//https://leetcode.com/problems/powx-n/solutions/2885106/pretty-fast-javascript-recurrent-function-with-explanation/?languageTags=javascript

function pow(x, n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      return 1 / pow(x, -n);
    } else if (n % 2 === 0) {
      let y = pow(x, n / 2);
      return y * y;
    } else {
      return x * pow(x, n - 1);
    }
  }

  //Time complexity: O(log(n))


  function pow1(x, n) {
    let result = 1;
    let absN = Math.abs(n);
    
    for (let i = 0; i < absN; i++) {
      result *= x;
    }
    
    if (n < 0) {
      return 1 / result;
    } else {
      return result;
    }
  }

//   console.log(pow(2.00000, -2));
//   console.log(pow(2.10000, 3));

    console.log(pow1(2.00000, -2));
    console.log(pow1(2.10000, 3));


    function pow1(x, n) {
      if (n === 0) {
        return 1;
      } else if (n < 0) {
        return 1 / pow(x, -n);
      } else if (n % 2 === 0) {
        const y = pow(x, n / 2);
        return y * y;
      } else {
        return x * pow(x, n - 1);
      }
    }

// The above code defines a function called pow that takes two arguments: x and n. It returns the value of x raised to the power n.

// Here is a step-by-step explanation of the code:

// First, we check if n is zero. If it is, we simply return 1, since anything raised to the power of zero is 1.
// Next, we check if n is negative. If it is, we recursively call pow with x and -n to calculate the reciprocal of x raised to the power n.
// If n is positive and even, we recursively call pow with x and n/2, and multiply the result by itself to get the value of x raised to the power n.
// If n is positive and odd, we recursively call pow with x and n-1, and then multiply the result by x to get the value of x raised to the power n.
// This implementation of pow function uses the concept of recursion and the properties of exponents to calculate the result efficiently, in O(log n) time complexity.
    