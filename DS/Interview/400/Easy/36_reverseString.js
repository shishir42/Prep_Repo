// Reverse String
// Topics: Two Pointers;String

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const reverseString = (s) =>{
    let left = 0
    let right = s.length - 1;

    while(left < right){
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

    return s;
}

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // Output: ["o", "l", "l", "e", "h"]

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // Output: ["h", "a", "n", "n", "a", "H"]

