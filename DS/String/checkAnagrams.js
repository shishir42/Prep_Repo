//An anagram of a string is another string that contains the same characters, 
//only the order of characters can be different. 
//For example, “LISTEN” and “SILENT” are an anagram of each other.

//The idea is simple. It creates a size 26 int arrays as buckets for each letter in alphabet. 
//It increments the bucket value with String s and decrement with string t. 
//So if they are anagrams, all buckets should remain with initial value which is zero. 
//So just checking that and return

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};


var areAnagram = (str1, str2) =>{
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;
   
    // If length of both strings is not
    // same, then they cannot be anagram
    if (n1 != n2)
        return false;
   
    // Sort both strings
    str1.sort();
    str2.sort()
   
    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;
   
    return true;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('LISTEN', 'SILENT'));


console.log(areAnagram(['t', 'e', 's', 't'], ['t', 't', 'e', 'w']));




var isAnagramUsingHashmap = function(s, t) {
    if (s.length !== t.length) return false;
    
    let letters = {};
    //create hashmap for both words, based on a counter
    for (let i = 0; i < s.length; i++) {
         letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
         letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
    }
    
    for (let letter in letters) {
        //this check for duplicates since if all letters are the same, we will end up with 0
        if (letters[letter] !== 0) {
            return false;
        }
    }
    return true;
};

