// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

var reverseBits = function(n) {
    let ans = 0;
    for( let i= 0; i < 32 ;i++){
        ans = (ans << 1) | (n&1);
        n = n >> 1;
    }
    return ans;
  };

//   console.log(reverseBits(00000010100101000001111010011100));
console.log(reverseBits(43261596));