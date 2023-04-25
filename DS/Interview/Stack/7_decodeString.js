function decodeString(str) {
    let stack = [];
    
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (char !== "]") {
        stack.push(char);
        continue;
      }
      
      let temp = "";
      
      while (stack[stack.length - 1] !== "[") {
        temp = stack.pop() + temp;
      }
      
      stack.pop(); // remove the '[' from the stack
      
      let numStr = "";
      
      while (!isNaN(stack[stack.length - 1])) {
        numStr = stack.pop() + numStr;
      }
      
      let num = parseInt(numStr);
      let decodedStr = temp.repeat(num);
      
      stack.push(decodedStr);
    }
    
    return stack.join("");
  }
  
  let encoded = "3[a]2[bc]";
  let decoded = decodeString(encoded); // "aaabcbc"
  console.log(decoded);


// Create an empty stack to store the decoded characters.
// Loop through each character in the input string:
// a. If the character is a digit, convert it to a number and push it onto the stack as a marker.
// b. If the character is a letter, push it onto the stack.
// c. If the character is '[', push it onto the stack as a marker.
// d. If the character is ']', start decoding by popping characters off the stack until a marker is reached.
// i. Pop the marker and convert it to a number.
// ii. Pop the characters before the marker and concatenate them together.
// iii. Repeat the concatenated string the number of times specified by the marker and push the resulting string back onto the stack.
// After looping through all the characters, pop the remaining characters off the stack and concatenate them to form the final decoded string.