// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Topics: Hash Table;String;Queue;Counting

// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

const firstUniqChar = (strs) =>{
    const map = new Map();
    for(let i=0; i<strs.length; i++){
        let char = strs[i];
        map.set(char, (map.get(char) || 0) + 1);
    }

    for(let i=0; i<strs.length; i++){
        if(map.get(strs[i]) === 1){
            return i;
        }
    }

    return -1;
}

console.log(firstUniqChar("loveleetcode"));

var firstUniqCharUsingStack = function(s) {
    // Initialize a map to store the frequency of each character in the string
    const freqMap = new Map();
    // Initialize a stack to keep track of unique characters
    const stack = [];
  
    // Iterate through the string and update the frequency map and stack
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
      if (freqMap.get(char) === 1) {
        stack.push(i);
      } else {
        // If the character is no longer unique, remove it from the stack
        while (stack.length > 0 && freqMap.get(s[stack[stack.length - 1]]) > 1) {
          stack.pop();
        }
      }
    }
  
    // If the stack is empty, no unique character was found
    if (stack.length === 0) {
      return -1;
    }
  
    // Otherwise, return the index of the first unique character
    return stack[0];
  };
  