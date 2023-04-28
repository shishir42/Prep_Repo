// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Topics: Math;String;Simulation

// Input: num1 = "11", num2 = "123"
// Output: "134"

const addStrings = (num1, num2) =>{
    let carry = 0;
    let result = '';
    let i = num1.length-1;
    let j = num2.length-1;
    while(i>=0 || j>=0 || carry > 0){
        const digit1 = i>=0 ? parseInt(num1[i]) : 0;
        const digit2 = j>=0 ? parseInt(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result; 
        carry = Math.floor(sum/10);
        i--;
        j--;
    }

    return result;
}

console.log(addStrings('123', '456')); // output: "579"
console.log(addStrings('999', '1')); // output: "1000"
console.log(addStrings('0', '0')); // output: "0"