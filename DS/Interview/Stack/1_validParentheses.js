// Valid Parentheses: Given a string of parentheses, brackets, and braces, determine if the string is valid, i.e., all opening parentheses have a corresponding closing parenthesis in the correct order.

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid.

//Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

const isValid = (str) =>{
    const stack = [];
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
      };

    for(let i=0; i<str.length; i++){
        const char = str[i];
        if(pairs[char]){
            stack.push(char);
        }else if (char === ")" || char === "]" || char === "}"){
            const lastBracket = stack.pop();
            if(pairs[lastBracket] !== char){
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isValid('(]'));
console.log(isValid('()[]{}'));
console.log(isValid('[]'));
console.log(isValid('{([])}'));