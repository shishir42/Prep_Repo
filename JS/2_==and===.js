
// The == operator compares two values for equality after performing type coercion, which means that it converts the operands to a common type before making the comparison. For example, if you compare a string to a number using ==, JavaScript will try to convert the string to a number before making the comparison. This can sometimes lead to unexpected results, as different types of values can be considered equal when compared with ==.

// On the other hand, the === operator compares two values for equality without performing type coercion. It only returns true if the operands have the same type and the same value. This means that the === operator is more strict than the == operator and is generally considered to be a safer way to compare values in JavaScript.

// Here are some examples to illustrate the differences between == and ===:

0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory


console.log(1 == "1"); // true - type coercion is performed
console.log(1 === "1"); // false - different types

console.log(0 == false); // true - type coercion is performed
console.log(0 === false); // false - different types

console.log(null == undefined); // true - special case in JavaScript
console.log(null === undefined); // false - different types
