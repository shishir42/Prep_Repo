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


const longestSubstringWithoutRepeatingChar = (str) => {
    if(str.length === 0){
        return 0;
    }

    let max = 0;
    let i=0,j=0;
    let size = str.length;
    const map = new Map();

    while(j < size){
        map.set(str.charAt(j), (map.get(str.charAt(j)) ?? 0) + 1);

        if(map.size > j-i+1){ //This condition does not met 
            j++;
        }else if (map.size === j-i+1){
            max = Math.max(max, j-i+1);
            j++;
        }else if (map.size < j-i+1){
            while(map.size < j-i+1){
                let mapCount = map.get(str[i]);
                mapCount--;
                map.set(str[i], mapCount);
                if(map.get(str[i]) === 0){
                    map.delete(str[i]);
                }
                i++;
            }
            j++;
        }
    }

    return max;
}

console.log(longestSubstringWithoutRepeatingChar('pwwkew'));
console.log(longestSubstringWithoutRepeatingChar('abcabcbb'));
console.log(longestSubstringWithoutRepeatingChar('bbbbb'));