//import Foundation
//import UIKit

print("Hello Operators")

//Swift also provides range operators that aren’t found in C, such as a..<b and a...b, as a shortcut for expressing a range of values.

//Assignment Operator

let b = 10
var a = 5
a = b

print("value of a is \(a) and b is \(b)")

//tuple
let (x, y) = (1, 2)
print("value of a is \(x) and b is \(y)")

//Remainder Operator
print(9 % 4)

//Compound Assignment Operators
a = 1
a += 2
print("value of a is \(a)")

//Comparison operators
let name = "world"
if name == "world" {
    print("hello, world")
} else {
    print("I'm sorry \(name), but I don't recognize you")
}
// Prints "hello, world", because name is indeed equal to "world".

//Ternary operator
let contentHeight = 40
let hasHeader = true
let rowHeight = contentHeight + (hasHeader ? 50 : 20)
print("Row height \(rowHeight)")

//Nil-Coalescing Operator
//The nil-coalescing operator (a ?? b) unwraps an optional a if it contains a value, or returns a default value b if a is nil.

//The nil-coalescing operator is shorthand for the code below:
let aa: String? = "test"
let bb: String? = nil
aa != nil ? aa! : bb

let defaultColorName = "red"
var userDefinedColorName: String?
var colorNameToUse = userDefinedColorName ?? defaultColorName

//let possibleString: String? = nil
//let forcedString: String = possibleString! //crashed Unexpectedly found nil while unwrapping an Optional value
//print(forcedString)

//Range Operators

//Closed Range Operator
for index in 1...5 {
    print("\(index) times 5 is \(index * 5)")
}

//Half-Open Range Operator
let names = ["Anna", "Alex", "Brian", "Jack"]
let count = names.count
for i in 0..<count {
    print("Person \(i + 1) is called \(names[i])")
}

print("***********")

//One-Sided Ranges
for name in names[2...] {
    print(name)
}

print("***********")
for name in names[...2] {
    print(name)
}

print("***********")
for name in names[..<2] {
    print(name)
}

let range = ...5
range.contains(7)   // false
range.contains(4)   // true
range.contains(-1)  // true

//Logical NOT Operator
let allowedEntry = false
if !allowedEntry {
    print("ACCESS DENIED")
}

//Logical AND Operator
let enteredDoorCode = true
let passedRetinaScan = false
if enteredDoorCode && passedRetinaScan {
    print("Welcome!")
} else {
    print("ACCESS DENIED AND Operator")
}

//Logical OR Operator
let hasDoorKey = false
let knowsOverridePassword = true
if hasDoorKey || knowsOverridePassword {
    print("Welcome!")
} else {
    print("ACCESS DENIED")
}

//Combining Logical Operators
if enteredDoorCode && passedRetinaScan || hasDoorKey || knowsOverridePassword {
    print("Welcome!")
} else {
    print("ACCESS DENIED")
}












