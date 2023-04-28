// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Topics: Two Pointers;String

const isPalindrome = (str) =>{
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^0-9a-z]/gi,'').toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));

const isPalindromeUsingTwoPointers=(str)=>{
    str = str.replace(/[^0-9a-z]/gi,'').toLowerCase();

    // Use two pointers to compare characters from both ends of the string
    let left = 0
    let right = str.length - 1;

    while(left <right){
        if(str.charAt(left) !== str.charAt(right)){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindromeUsingTwoPointers('A man, a plan, a canal: Panama'));
