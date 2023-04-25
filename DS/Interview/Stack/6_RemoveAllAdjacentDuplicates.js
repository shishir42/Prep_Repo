const removeAdjacentDuplicates = (str) => {
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2);
      i = Math.max(i - 1, 0);
    } else {
      i++;
    }
  }
  return str;
};

console.log(removeAdjacentDuplicates("abbaca")); // Output: "ca"
console.log(removeAdjacentDuplicates("aaa")); // Output: ""
console.log(removeAdjacentDuplicates("aabbccddee")); // Output: ""
console.log(removeAdjacentDuplicates("abcde")); // Output: "abcde"

function removeKAdjacentDuplicates(s, k) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (stack.length && stack[stack.length - 1][0] === char) {
        const [prevChar, count] = stack.pop();
        if (count === k - 1) continue;
        stack.push([prevChar, count + 1]);
      } else {
        stack.push([char, 1]);
      }
    }
    let result = "";
    for (const [char, count] of stack) {
      result += char.repeat(count);
    }
    return result;
  }
  
  console.log(removeKAdjacentDuplicates("deeedbbcccbdaa", 3)); // Output: "aa"
  console.log(removeKAdjacentDuplicates("pbbcggttciiippooaais", 2)); // Output: "ps"
  console.log(removeKAdjacentDuplicates("abcd", 2)); // Output: "abcd"
  console.log(removeKAdjacentDuplicates("aaaaabbbbbb", 0)); // Output: "aaaaabbbbbb"
  