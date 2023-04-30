//  Number of Steps to Reduce a Number to Zero

// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

function numberOfSteps(num) {
    let steps = 0;
    
    while (num > 0) {
      if (num % 2 === 0) {
        num /= 2;
      } else {
        num--;
      }
      steps++;
    }
    
    return steps;
  }

  
  const num = 14;

const steps = numberOfSteps(num);

console.log(steps); // prints 6 (since it takes 6 steps to reduce 14 to zero: 14 -> 7 -> 6 -> 3 -> 2 -> 1 -> 0)
