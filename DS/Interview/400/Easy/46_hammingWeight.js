// The hammingWeight function takes an integer num as input and returns the number of 1 bits in the binary representation of num. It does this by iterating over each bit in num from right to left (least significant bit to most significant bit) using a for loop with a counter variable i, checking if the i-th bit is 1 using a bitwise AND operation with a left-shifted 1 bit (i.e., 1 << i), and then incrementing the count variable if the i-th bit is 1.

// To use this function, simply pass in a 32-bit integer as an argument:

function hammingWeight(num) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        // 1 using a bitwise AND operation with a left-shifted 1 bit (i.e., 1 << i), and then incrementing the count variable if the i-th bit is 1.
        if (num & (1 << i)) {
            count++;
        }
    }
    return count;
}


console.log(hammingWeight(0b00000000000000000000000000001011)); // 3
console.log(hammingWeight(0b00000000000000000000000010000000)); // 1
console.log(hammingWeight(0b11111111111111111111111111111101)); // 31

// Note that the 0b prefix is used to specify a binary literal in JavaScript. The time complexity of this algorithm is O(1), because the number of iterations required is fixed at 32 (the number of bits in a 32-bit integer).