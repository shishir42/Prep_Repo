// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Input: s = "aba"
// Output: true

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      if (s[left] !== s[right]) {
        return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  
  console.log(validPalindrome("aba")); // Output: true
console.log(validPalindrome("abca")); // Output: true
console.log(validPalindrome("abcda")); // Output: false
