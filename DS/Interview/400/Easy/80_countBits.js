// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

function countBits(num) {
    const bitCount = [];
    for (let i = 0; i <= num; i++) {
      bitCount[i] = bitCount[i >> 1] + (i & 1);
    }
    return bitCount;
  }

  console.log(countBits(2));
  