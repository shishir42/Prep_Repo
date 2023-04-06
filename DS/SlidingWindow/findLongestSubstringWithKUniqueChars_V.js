//Sliding window variable size


const findLongestSubstringWithKUniqueChars = (str, k) =>{
    if (str.length === 0 || k === 0) {
        return 0;
    }

    let max=0;
    let i = 0, j = 0;
    const size = str.length;
    var map = new Map();
    while(j < size){
        map.set(str[j], (map.get(str[j]) ?? 0) + 1);

        if(map.size < k){
            j++;
        }else if (map.size === k){
            let windowSize = j-i+1;
            max = Math.max(max, j-i+1);
            j++;
        }else if(map.size > k){
            while(map.size > k){
                let mapCount = map.get(str[i]);
                mapCount--;
                map.set(str[i], mapCount);
                if(map.get(str[i]) === 0){
                    map.delete(str[i]);
                }
                i++;
            }
            j++;
        }
        
    }

    return max;
}

console.log(findLongestSubstringWithKUniqueChars('aabacbebebe', 3))
console.log(findLongestSubstringWithKUniqueChars([1,2,3,2,2], 2))
