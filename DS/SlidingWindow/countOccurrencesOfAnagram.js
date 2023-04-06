const countOccurrencesOfAnagram = (text, word) => {
    const size = text.length;
    const k = word.length;
    let count = 0;

    for (let i = 0; i < size - k + 1; i++) {
        if (isAnagram(text.substring(i, i + word.length), word)) {
            count++;
        }
    }

    return count;
}

function countAnagrams(text, word) {

    // Initialize result
    let res = 0;
    for (let i = 0; i < text.length - word.length + 1; i++) {

        // Check if the word and substring are
        // anagram of each other.

        if (areAnagram(text.substring(i, i + word.length), word)) res++;
    }
    return res;
}

function areAnagram(s1, s2) {
    let m = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (m.has(s1[i]) === false) {
            m.set(s1[i], 1)
        }
        else {
            let cnt = m.get(s1[i]);
            m.delete(s1[i]);
            m.set(s1[i], cnt + 1);
        }
    }

    for (let j = 0; j < s1.length; j++) {
        if (m.has(s2[j]) === false) {
            return false;
        }
        else {
            let cnt = m.get(s2[j]);
            m.delete(s2[j]);
            m.set(s2[j], cnt - 1);
        }
    }

    for (const it in m.values()) {
        if (it !== 0) return false
    }
    return true;
}

const isAnagram = (a, b) => a.length === b.length
    && a
        .toLowerCase()
        .split('')
        .every(character => b.toLowerCase().includes(character));

let text = "forxxorfxdofr";
let word = "for";
console.log(countOccurrencesOfAnagram(text, word));

let text1 = "aabaabaa";
let word1 = "aaba";
console.log(countOccurrencesOfAnagram(text1, word1));

const countOccurrencesOfAnagram_sliding = (text, word) => {
    const size = text.length;
    const k = word.length;

    let ans = 0;
    let map = {};

    for (let i = 0; i < k; i++) {
        const char = word.charAt(i);
        if (char in map) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    let count = Object.keys(map).length;
    let i = 0, j = 0;
    while (j < size) {
        //calculation 
        let ch = text.charAt(j);
        if (map[ch]) {
            map[ch]--;
            if (map[ch] === 0) {
                count--;
            }
        }

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            if (count === 0) {
                ans++;
            }

            let ch1 = text.charAt(i);
            if (ch1 in map) {
                map[ch1]++;
                if (map[ch1] === 1) {
                    count++;
                }
            }
            i++;
            j++;
        }
    }

    return ans;
}

// console.log(countOccurrencesOfAnagram_sliding(text, word));
console.log(countOccurrencesOfAnagram_sliding(text1, word1));

