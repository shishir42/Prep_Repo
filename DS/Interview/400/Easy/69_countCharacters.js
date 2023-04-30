// Find Words That Can Be Formed by Characters
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let charCounts = new Array(26).fill(0);
    let count = 0;
    for (let i = 0; i < chars.length; i++) {
        let index = chars.charCodeAt(i) - 'a'.charCodeAt(0);
        charCounts[index]++;
    }
    for (let i = 0; i < words.length; i++) {
        let wordCounts = new Array(26).fill(0);
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            let index = word.charCodeAt(j) - 'a'.charCodeAt(0);
            wordCounts[index]++;
        }
        let isGood = true;
        for (let j = 0; j < 26; j++) {
            if (wordCounts[j] > charCounts[j]) {
                isGood = false;
                break;
            }
        }
        if (isGood) {
            count += word.length;
        }
    }
    return count;
};

const words = ["cat","bt","hat","tree"];
const chars = "atach";

const count = countCharacters(words, chars);
console.log(count); // 6