// Self Dividing Numbers
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

const selfDividingNumbers = (left, right) =>{
    const results = [];
    for(let i = left; i<=right; i++){
        if(isSelfDividing(i)){
            results.push(i);
        }
    }

    return results;
}

const isSelfDividing = (num) =>{
    let n = num;
    while(n>0){
        const digit = n%10;

        if(digit === 0 || num % digit !== 0){
            return false;
        }

        n = Math.floor(n/10);
    }

    return true;
}

const left = 1;
const right = 22;
const result = selfDividingNumbers(left, right);
console.log(result); // Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]