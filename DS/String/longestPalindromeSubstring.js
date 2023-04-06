//aba - Palindrome
//abab - Palindrome - aba or bab

//Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

//Input: s = "baab"
// Output: "baab"

//https://www.youtube.com/watch?v=AKIHWGumagI


const longestPalindromeSubstring = (str) =>{
    let start = 0, end = 0;
    for(let i=0; i<str.length;i++){
        let len1 = expandFromCenter(str, i, i+1);
        let len2 = expandFromCenter(str, i, i);
        let len = Math.max(len1, len2);
        if(end-start<len){
            start = i-Math.floor((len-1)/2);
            end = i + Math.floor(len/2);
        }
    }

    return str.substring(start, end+1);
}

const expandFromCenter = (str, i, j) =>{
    while(i>=0 && j<str.length && str.charAt(i) === str.charAt(j)){
        i--;
        j++;
    }

    return j-i-1;
}

//T.c - O(n2)
//S.c - O(1)

console.log(longestPalindromeSubstring('babad'));
console.log(longestPalindromeSubstring('cbbd'));
console.log(longestPalindromeSubstring('baab'));
console.log(longestPalindromeSubstring('bab'));
console.log(longestPalindromeSubstring('findnitianhere'));