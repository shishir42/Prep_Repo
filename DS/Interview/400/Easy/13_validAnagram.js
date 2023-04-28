// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

const validAnagram = (s, t) =>{
    // If the lengths of the strings are different, they can't be anagrams
    if(s.length !== t.length){
        return false;
    }

    let charFreq = {};

    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(charFreq[char]){
            charFreq[char]++;
        }else{
            charFreq[char] = 1;
        }
    }

    for(let i=0; i<t.length; i++){
        let char = t[i];
        if(charFreq[char]){
            charFreq[char]--;
        }else{
            return false;
        }
    }

    return true;

}

console.log(validAnagram('anagram', 'nagaram'));