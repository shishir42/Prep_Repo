// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Topics: Math

const isPalindrome = (x) => {
    if(x<0) return false; //negative integers cannot be palindromes

    const original = x;
    let reversed = 0;

    while(x != 0){
        let mod = (x % 10);
        reversed = reversed * 10 + mod; //add the last digit of x to the beginning of reversed
        x = Math.floor(x/10); // remove the last digit of x
    }

    return original === reversed;
}

console.log(isPalindrome(121));