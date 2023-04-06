//Given a string containing just the characters '(' and ')', 
// return the length of the longest valid (well-formed) parentheses substring.

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Input: s = ""
// Output: 0

//top from stack = stack[stack.length-1]

const longestValidParentheses = (str) =>{
    let stack = [-1], ans = 0;
    for(let i=0; i< str.length; i++){
        if(str[i] === '('){
            stack.push(i)
        }else if (stack.length === 1){
            stack[0] = i
        }else{
            stack.pop();
            ans = Math.max(ans, i - stack[stack.length-1])
        }
    }

    return ans;
}

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses(''));