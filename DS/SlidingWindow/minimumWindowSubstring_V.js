// Given two strings i and t of lengths m and n respectively, return the minimum window 
// substring of i such that every character in t (including duplicates) 
// is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Input: i = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Input: i = "a", t = "a"
// Output: "a"
// Explanation: The entire string i is the minimum window.

// Input: i = "a", t = "aa"
// Output: ""
// Explanation: Both 'a'i from t must be included in the window.
// Since the largest window of i only has one 'a', return empty string.

const subIncludesAll = (str, str2) => {
    for (let i = 0; i < str.length; i++) {
        if (str2.indexOf(str[i]) !== -1) {
            str2 = str2.replace(str[i], '');
        };
    };
    return (str2.length === 0);
};
const minWindow = (str1 = '', str2 = '') => {
    let shortestString = null;
    for (let i = 0; i < str1.length; i++) {
        for (let j = i; j < str1.length; j++) {
            let testString = str1.substr(i, j - i + 1);
            if (subIncludesAll(testString, str2)) {
                if (shortestString === null || testString.length < shortestString.length) {
                    shortestString = testString;
                }
            }
        }
    }
    return shortestString;
};

var minWindow1 = function (str, t) {
    let [i, j, result, map, count] = [0, 0, "", new Map(), 0];

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) map.set(t[i], 0);
        map.set(t[i], map.get(t[i]) + 1)
    }
    count = map.size

    while (j < str.length) { // slide right pointer right
        const c = str[j]

        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) count--;
        }

        while (count === 0) { // slide left pointer right
            const c = str[i];

            if (result === "" || result.length > (j - i + 1)) {
                result = str.slice(i, j + 1)
            }

            if (map.has(c)) {
                map.set(c, map.get(c) + 1)
                if (map.get(c) >= 1) count++;
            }
            i++;
        }
        j++;
    }

    return result;
};

console.log(minWindow("abcdefgh", "gedcf"));
console.log(minWindow1("abcdefgh", "gedcf"));

// https://leetcode.com/problems/minimum-window-substring/solutions/1570981/JavaScript-Solution-O(N+M)-Sliding-Window-with-explanation/