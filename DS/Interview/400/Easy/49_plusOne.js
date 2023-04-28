function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

let digits = [1, 2, 9];
console.log(plusOne(digits)); // output: [1, 3, 0]

// digits = [9, 9, 9];
// console.log(plusOne(digits)); // output: [1, 0, 0, 0]
