// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the
// signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// x%10 - return last digit
// x/10 - removed last digit 
// (x/10 + x%10)

const reverse = function(x) {
    let result = 0;
    const MIN = Math.pow(-2, 31), MAX = Math.pow(2, 31) - 1;
    while (x !== 0) {
        let last = x % 10;      // save last bit
        x  = parseInt(x / 10);  // discard last bit
        result = (result * 10) + last;
        if (result < MIN || result > MAX) return 0;
    }
    return result;
};

console.log(reverse());

//T.C O(log n)