//Given an array of strings strs, group the anagrams together. 
//You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//Solved using hashtable

const groupHashmap = (strs) => {
    let result = {};
    for (let word of strs) {
        let cleansed = word.split("").sort().join("");
        if (result[cleansed]) {
            result[cleansed].push(word);
        } else {
            result[cleansed] = [word];
        }
    }
    return Object.values(result);
}

console.log(groupHashmap(["eat","tea","tan","ate","nat","bat"]))