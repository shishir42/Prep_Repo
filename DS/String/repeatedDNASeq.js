// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

//Hashmap solution tc: O(n) sc: O(n)
const repeatedDNASeq = (str) =>{
    const map = new Map();
    const res = [];
    for(let i=0; i< str.length - 10; i++){
        let substr = str.substring(i, i+10);
        if(map.has(substr)){
            map.set(substr, map.get(substr) + 1); 
        }else{
            map.set(substr, 1);
        }
    }

    map.forEach((value, key)=>{
        if(value > 1){
            res.push(key);
        }
    });

    return res;
}

console.log(repeatedDNASeq('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))