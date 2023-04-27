//  Here's the code to find the first non-repeating character in a string and return its index in JavaScript:
 const firstUniqueCharacter = (s) =>{
    let charCount = new Map();

     // count frequency of each character in string
    for(let i=0; i<s.length; i++){
        let c = s.charAt(i);
        charCount.set(c, charCount.get(c) + 1 || 1);
    }

    // find first non-repeating character
    for(let i=0; i<s.length; i++){
        let c = s.charAt(i);
        if(charCount.get(c) === 1){
            return i;
        }
    }

    return -1; 
 }

// console.log(firstUniqueCharacter("leetcode")); // expected output: 0
console.log(firstUniqueCharacter("loveleetcode")); // expected output: 2
// console.log(firstUniqueCharacter("abcabc")); // expected output: -1