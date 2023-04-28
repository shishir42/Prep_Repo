// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Topics: String;Trie

const longestCommonPrefix = (strs) =>{
    if(!strs || strs.length === 0){
        return "";
    }

    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length-1);
            if(!prefix){
                return "";
            }
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));