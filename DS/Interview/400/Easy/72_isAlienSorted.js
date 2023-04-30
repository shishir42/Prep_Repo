// Verifying an Alien Dictionary
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // Initialize a map to store the order of each character in the alien alphabet
    const orderMap = new Map();
    for (let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }
    
    // Loop through each pair of adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        let j = 0;
        
        // Compare each pair of corresponding characters in the words
        while (j < word1.length && j < word2.length && word1[j] === word2[j]) {
            j++;
        }
        
        // If one word is a prefix of the other, the shorter word must come first
        if (j === word2.length && j < word1.length) {
            return false;
        }
        
        // If the order of the corresponding characters is not correct, return false
        if (j < word1.length && j < word2.length && orderMap.get(word1[j]) > orderMap.get(word2[j])) {
            return false;
        }
    }
    
    // If all pairs of words are in the correct order, return true
    return true;
};

// Example input
const words = ["hello","leetcode"];
const order = "hlabcdefgijkmnopqrstuvwxyz";
const isSorted = isAlienSorted(words, order);
console.log(isSorted); // Output: true
