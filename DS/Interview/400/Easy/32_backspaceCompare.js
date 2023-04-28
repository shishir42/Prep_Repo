// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Topics: Two Pointers;String;Stack;Simulation

const backspaceCompare = (s, t) =>{
    const s1 = applyBackspace(s);
    const s2 = applyBackspace(t);

    return s1 === s2;
}

const applyBackspace = (str) =>{
    const stack = [];
    for(let i=0; i<str.length;i++){
        let char = str[i];
        if(char === "#"){
            stack.pop();
        }else{
            stack.push(char);
        }
    }

    return stack.join("");
}

console.log(backspaceCompare("ab#c", "ad#c")); // Output: true
console.log(backspaceCompare("ab##", "c#d#")); // Output: true
console.log(backspaceCompare("a##c", "#a#c")); // Output: true
console.log(backspaceCompare("a#c", "b")); // Output: false