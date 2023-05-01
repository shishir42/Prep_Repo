// Topics: Array;Hash Table;String;Sorting

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (words) =>{
    const map = new Map();
    for(let word of words){
        const key = [...word].sort().join("");
        if (!map.has(key)) {
            map.set(key, [word]);
          } else {
            map.get(key).push(word);
          }
    }

    return [...map.values()];
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));