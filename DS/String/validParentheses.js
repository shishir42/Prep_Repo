//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid.

//Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

const isValid = (s) => {
    const stack = [];
    const map = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}']
    ]);
  
    for (let i = 0 ; i < s.length ; i += 1) {
      if (map.has(s[i])) {
        stack.push(map.get(s[i]));
      } else if (s[i] !== stack.pop()) {
        return false;
      } 
    }
  
    return stack.length === 0;
  };

  console.log(isValid('(]'));
  console.log(isValid('()[]{}'));
  console.log(isValid('[]'));
  console.log(isValid('{([])}'));
