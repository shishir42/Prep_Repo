// arr1 = [7, 3, 9]
// arr2 = [6, 3, 9, 2, 9, 4]
// union = 6 (7, 3, 9, 6, 2, 4) return size

//brute force 
//1. nested loops O(n2)
//2. sort O(nlogn)

//hashmap

const union = (arr1, arr2) =>{
    const union = [...arr1];
    for(const c1 of arr2){
        if(!union.includes(c1)){
            union.push(c1);
        }
    }

    return union;
}

console.log(union([7, 3, 9],[6, 3, 9, 2, 9, 4]));

const intersection = (arr1, arr2) =>{
    const union = [...arr1];
    const result = [];
    for(const c1 of arr2){
        if(union.includes(c1) && !result.includes(c1)){
            result.push(c1);
        }
    }

    return result;
}

console.log(intersection([7, 3, 9],[6, 3, 9, 2, 9, 4]));
