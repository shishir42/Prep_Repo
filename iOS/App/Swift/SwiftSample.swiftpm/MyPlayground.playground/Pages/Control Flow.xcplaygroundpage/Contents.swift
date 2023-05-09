import Foundation

//For-In Loops
let names = ["Anna", "Alex", "Brian", "Jack"]
for name in names {
    print("Hello, \(name)!")
}

//iterate over a dictionary to access its key-value pairs.
let numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]
for (animalName, legCount) in numberOfLegs {
    print("\(animalName)s have \(legCount) legs")
}

//Some users might want fewer tick marks in their UI. They could prefer one mark every 5 minutes instead. Use the stride(from:to:by:) function to skip the unwanted marks.
let minuteInterval = 5
for tickMark in stride(from: 0, to: 5, by: 1) {
    // render the tick mark every 5 minutes (0, 5, 10, 15 ... 45, 50, 55)
    print("tick mark \(tickMark)")
}

//Closed ranges are also available, by using stride(from:through:by:) instead:
let hours = 12
let hourInterval = 3
for tickMark in stride(from: 3, through: hours, by: hourInterval) {
    // render the tick mark every 3 hours (3, 6, 9, 12)
    print(tickMark)
}

//While Loops
//A while loop performs a set of statements until a condition becomes false. These kinds of loops are best used when the number of iterations isn’t known before the first iteration begins. Swift provides two kinds of while loops:
//
//while evaluates its condition at the start of each pass through the loop.
//
//repeat-while evaluates its condition at the end of each pass through the loop.

//If
var temperatureInFahrenheit = 30
if temperatureInFahrenheit <= 32 {
    print("It's very cold. Consider wearing a scarf.")
}

//Switch
let someCharacter: Character = "z"
switch someCharacter {
case "a":
    print("The first letter of the alphabet")
case "z":
    print("The last letter of the alphabet")
default:
    print("Some other character")
}

let anotherCharacter: Character = "a"
switch anotherCharacter {
//case "a": // Invalid, the case has an empty body
case "A":
    print("The letter A")
default:
    print("Not the letter A")
}

switch anotherCharacter {
case "a", "A":
    print("The letter A")
default:
    print("Not the letter A")
}

//Interval Matching
let approximateCount = 62
let countedThings = "moons orbiting Saturn"
let naturalCount: String
switch approximateCount {
case 0:
    naturalCount = "no"
case 1..<5:
    naturalCount = "a few"
case 5..<12:
    naturalCount = "several"
case 12..<100:
    naturalCount = "dozens of"
case 100..<1000:
    naturalCount = "hundreds of"
default:
    naturalCount = "many"
}
print("There are \(naturalCount) \(countedThings).")

//Tuples
let somePoint = (1, 1)
switch somePoint {
case (0, 0):
    print("\(somePoint) is at the origin")
case (_, 0):
    print("\(somePoint) is on the x-axis")
case (0, _):
    print("\(somePoint) is on the y-axis")
case (-2...2, -2...2):
    print("\(somePoint) is inside the box")
default:
    print("\(somePoint) is outside of the box")
}

//Value Bindings
let anotherPoint = (2, 0)
switch anotherPoint {
case (let x, 0):
    print("on the x-axis with an x value of \(x)")
case (0, let y):
    print("on the y-axis with a y value of \(y)")
case let (x, y):
    print("somewhere else at (\(x), \(y))")
}

//Where
let yetAnotherPoint = (1, -1)
switch yetAnotherPoint {
case let (x, y) where x == y:
    print("(\(x), \(y)) is on the line x == y")
case let (x, y) where x == -y:
    print("(\(x), \(y)) is on the line x == -y")
case let (x, y):
    print("(\(x), \(y)) is just some arbitrary point")
}

//Compound Cases

let someCharacter1: Character = "e"
switch someCharacter1 {
case "a", "e", "i", "o", "u":
    print("\(someCharacter1) is a vowel")
case "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
    "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z":
    print("\(someCharacter1) is a consonant")
default:
    print("\(someCharacter1) isn't a vowel or a consonant")
}

//compound cases with value bindings
let stillAnotherPoint = (9, 0)
switch stillAnotherPoint {
case (let distance, 0), (0, let distance):
    print("On an axis, \(distance) from the origin")
default:
    print("Not on an axis")
}

//Control Transfer Statements
//continue
//break
//fallthrough
//return
//throw

let integerToDescribe = 5
var description = "The number \(integerToDescribe) is"
switch integerToDescribe {
case 2, 3, 5, 7, 11, 13, 17, 19:
    description += " a prime number, and also"
    fallthrough
default:
    description += " an integer."
}
print(description)

//Early Exit

//A guard statement, like an if statement, executes statements depending on the Boolean value of an expression. You use a guard statement to require that a condition must be true in order for the code after the guard statement to be executed. Unlike an if statement, a guard statement always has an else clause — the code inside the else clause is executed if the condition isn’t true.

func greet(person: [String: String]) {
    guard let name = person["name"] else {
        return
    }

    print("Hello \(name)!")

    guard let location = person["location"] else {
        print("I hope the weather is nice near you.")
        return
    }

    print("I hope the weather is nice in \(location).")
}

greet(person: ["name1": "Shishir"])
greet(person: ["name": "John"])
greet(person: ["name": "Jane", "location": "Cupertino"])


//Deferred Actions

var score = 1
if score < 10 {
    defer {
        print(score)
    }
    score += 5
}


//Checking API Availability
if #available(iOS 10, macOS 10.12, *) {
    // Use iOS 10 APIs on iOS, and use macOS 10.12 APIs on macOS
    print("1")
} else {
    // Fall back to earlier iOS and macOS APIs
    print("2")
}

@available(macOS 10.12, *)
struct ColorPreference {
    var bestColor = "blue"
}

func chooseBestColor() -> String {
    guard #available(macOS 10.12, *) else {
       return "gray"
    }
    let colors = ColorPreference()
    return colors.bestColor
}

print(chooseBestColor())

if #available(iOS 10, *) {
    print("**1**")
} else {
    // Fallback code
    print("**2**")
}

if #unavailable(iOS 10) {
    // Fallback code
    print("**Fallback code**11")
}else{
    print("**Fallback code**22")
}
