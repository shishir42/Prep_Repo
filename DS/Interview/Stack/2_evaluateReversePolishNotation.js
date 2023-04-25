// Evaluate Reverse Polish Notation: Given an array of strings representing reverse Polish notation expressions, evaluate the expression and return the result.

// To evaluate a Reverse Polish Notation expression, we need to use a stack data structure. We iterate through the given array of strings, and for each string, we check if it is a number or an operator. If it is a number, we push it onto the stack. If it is an operator, we pop the top two elements from the stack, perform the operation on them, and push the result back onto the stack. After iterating through the entire array, the result will be the only element left in the stack.

const evaluateReversePolishNotation = (tokens) =>{
    const stack = [];
    for(let i=0; i<tokens.length; i++){
        const token = tokens[i];

        if(!isNaN(parseInt(token))){
            stack.push(parseInt(token));
        }else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch(token){
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
                default:
                    throw new Error('Invalid Operator');
            }    
        }
    }
    return stack.pop();
}

const tokens = ['2', '1', '+', '3', '*'];
const result = evaluateReversePolishNotation(tokens);
console.log(result);