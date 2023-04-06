// 121   = true
// 1221  = true
// 1234  = false
// -121  = false
// 1210  = false //number end is zero and number is negative
// 12321 = true

const isPalindrome = (num) =>{
    // if the number is negative or number end with 0 except number 0
    if(num < 0 || (num !== 0 & num%10 === 0)){
        return false;
    }

    let reverse = 0;
    let number = num;
    while(number > reverse){
        let lastDigit = number % 10;
        reverse = (reverse * 10) + lastDigit;
        number = parseInt(number / 10);
    }

    return number === parseInt(reverse/10) || number === reverse;
}

console.log(isPalindrome(12321));