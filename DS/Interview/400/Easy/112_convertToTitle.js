var convertToTitle = function(columnNumber) {
    let result = '';
    let base = 26;
    
    while (columnNumber > 0) {
        let remainder = (columnNumber - 1) % base;
        let charCode = remainder + 'A'.charCodeAt(0);
        let char = String.fromCharCode(charCode);
        result = char + result;
        columnNumber = Math.floor((columnNumber - 1) / base);
    }
    
    return result;
};


// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

// Input: columnNumber = 1
// Output: "A"

console.log(convertToTitle(1));