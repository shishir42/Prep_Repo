// n = 5
//1,2,3,4,5
//multiple of 3 or 5
// O/P: [1,2,fizz,5,buzz]

// n = 15
//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
//multiple of 3 or 5
//[1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]

const fizzbuzz = (arr) => {
    const newArr = [];
    for (let i = 1; i <= arr.length; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            newArr.push("FuzzBuzz");
        }else if(i % 3 === 0){
            newArr.push("fuzz");
        }else if(i % 5 === 0){
            newArr.push("buzz");
        }else{
            newArr.push(i);
        }
    }

    return newArr;
}

console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).toString());