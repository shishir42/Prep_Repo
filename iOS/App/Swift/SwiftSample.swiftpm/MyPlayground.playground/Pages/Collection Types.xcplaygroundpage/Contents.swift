import Foundation

//Swift provides three primary collection types, known as arrays, sets, and dictionaries, for storing collections of values. Arrays are ordered collections of values. Sets are unordered collections of unique values. Dictionaries are unordered collections of key-value associations.

//If you create an array, a set, or a dictionary, and assign it to a variable, the collection that’s created will be mutable. This means that you can change (or mutate) the collection after it’s created by adding, removing, or changing items in the collection. If you assign an array, a set, or a dictionary to a constant, that collection is immutable, and its size and contents can’t be changed.

//Creating an Empty Array
var someInts: [Int] = []
print("someInts is of type [Int] with \(someInts.count) items.")
someInts.append(1)
someInts.append(2)
print("Some ints  before \(someInts)")
someInts = []
print("Some ints after  \(someInts)")

//Creating an Array with a Default Value
var threeDoubles = Array(repeating: 0.0, count: 3)
print(threeDoubles)

//Creating an Array with an Array Literal
var shoppingList: [String] = ["Eggs", "Milk"]
print(shoppingList)
if shoppingList.isEmpty {
    print("The shopping list is empty.")
} else {
    print("The shopping list isn't empty.")
}

//Iterating Over an Array
for item in shoppingList {
    print(item)
}
for (index, value) in shoppingList.enumerated() {
    print("Item \(index + 1): \(value)")
}

let oddDigits: Set = [1, 3, 5, 7, 9]
let evenDigits: Set = [0, 2, 4, 6, 8]
let singleDigitPrimeNumbers: Set = [2, 3, 5, 7]

oddDigits.union(evenDigits).sorted()
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
oddDigits.intersection(evenDigits).sorted()
// []
oddDigits.subtracting(singleDigitPrimeNumbers).sorted()
// [1, 9]
oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted()
// [1, 2, 9]

//Creating an Empty Dictionary
var namesOfIntegers: [Int: String] = [:]

namesOfIntegers[16] = "sixteen"
// namesOfIntegers now contains 1 key-value pair
namesOfIntegers = [:]
// namesOfIntegers is once again an empty dictionary of type [Int: String]

//Creating a Dictionary with a Dictionary Literal
var airports: [String: String] = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
airports["LHR"] = "London"
print(airports)

if let airportName = airports["DUB"] {
    print("The name of the airport is \(airportName).")
} else {
    print("That airport isn't in the airports dictionary.")
}

for (airportCode, airportName) in airports {
    print("\(airportCode): \(airportName)")
}

for airportCode in airports.keys {
    print("Airport code: \(airportCode)")
}
// Airport code: LHR
// Airport code: YYZ

for airportName in airports.values {
    print("Airport name**: \(airportName)")
}
// Airport name: London Heathrow
// Airport name: Toronto Pearson

let airportCodes = [String](airports.keys)
let airportNames = [String](airports.values)
