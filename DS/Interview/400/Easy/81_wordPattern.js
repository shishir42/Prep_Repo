// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

const wordPattern = (pattern, s) =>{
    const words = s.split(" ");
    if(pattern.length !== words.length) return false;

    const map = new Map();
    const set = new Set();

    for(let i=0; i<pattern.length; i++){
        const char = pattern[i];
        const word = words[i];

        if(!map.has(char) && !set.has(word)){
            map.set(char, word);
            set.add(word)
        }else if(map.get(char) !== word){
            return false;
        }
    }

    return true;
}

const pattern = "abba", s = "dog cat cat dog"
console.log(wordPattern(pattern, s));