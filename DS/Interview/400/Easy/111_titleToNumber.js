// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

var titleToNumber = function(columnTitle) {
    let result = 0;
    let base = 26;
    
    for (let i = 0; i < columnTitle.length; i++) {
        let charCode = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * base + charCode;
    }
    
    return result;
};

console.log(titleToNumber("A"));