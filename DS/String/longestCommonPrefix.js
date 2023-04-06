//["flower", "flow", "flight"] O/p : fl
//["abcd", "accd", "adcd"] O/p: a
//["dog", "racecar", "car"] O/p: ""
//["leetcode", "lead", "leet"] O/p: "le" 

//Trie data structure

const longestCommonPrefix = (arr) =>{
    if(arr.length === 0) return "";

    let prefix = arr[0];
    for(let i=1; i<arr.length; i++){
        while(arr[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if(!prefix) return "";
        }
    }

    return prefix;
}

//TC O(m*n)
//SC O(1)

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["abcd", "accd", "adcd"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["leetcode", "lead", "leet"]));