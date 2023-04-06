//Given a string s, find the length of the longest substring without repeating characters.


// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//https://www.enjoyalgorithms.com/blog/longest-substring-without-repeating-characters
//https://www.interviewbit.com/blog/longest-substring-without-repeating-characters/

const longestSubstringWithoutRepeatingChar = (str) =>{
    let ans = 0;
    let map = {};
    let left = 0;
    for(let right=0; right<str.length; right++){
        let ch = str.charAt(right);
        if (ch in map) {
            map[ch]++;
            let chCount = map[ch];
            left = Math.max(left, chCount);
            map[ch] = right
        }else{
            map[ch] = right;
        }

        ans = Math.max(ans, right-left+1);
    }

    return ans;
}

console.log(longestSubstringWithoutRepeatingChar('abba'));