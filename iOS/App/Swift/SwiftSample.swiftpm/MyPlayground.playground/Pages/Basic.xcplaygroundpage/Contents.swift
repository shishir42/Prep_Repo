import UIKit

//Declaring Constants and Variables
let maxAttempt = 10;
var currentLoginAttempt = 0;

//Declaring multiple constants or variables
var x = 0.0, y = 0.0, z = 0.0

//Type Annotations
var welcomeMessage: String
welcomeMessage = "hello"

//Define multiple
var red, green, blue: Double

let languageName = "Swift"
//languageName = "Swift++" Cannot assign to value: 'languageName' is a 'let' constant

//Printing
var friendlyWelcome = "XYZ"
print(welcomeMessage)
print("The current value of friendlyWelcome is \(friendlyWelcome)")

//Semicolons
let cat = "🐱"; print(cat)

//Integer Bounds
let minValue = UInt8.min
let maxValue = UInt8.max

//Type Safety and Type Inference

let meaningOfLife = 42
// meaningOfLife is inferred to be of type Int

let pi = 3.14159
// pi is inferred to be of type Double

let three = 3
let pointOneFourOneFiveNine = 0.14159
let pii = Double(three) + pointOneFourOneFiveNine
//let pii1 = three + pointOneFourOneFiveNine //Binary operator '+' cannot be applied to operands of type 'Int' and 'Double'


let pii1 = three + Int(pointOneFourOneFiveNine)

//Type Aliases
//Type aliases define an alternative name for an existing type. You define type aliases with the typealias keyword.

typealias AudioSample = UInt16
var maxAmplitudeFound = AudioSample.max
print(maxAmplitudeFound)

let turnipsAreDelicious = false
if turnipsAreDelicious {
    print("Mmm, tasty turnips!")
} else {
    print("Eww, turnips are horrible.")
}

//Conditional statements
let i = 1
//if i {
//    // this example will not compile, and will report an error
//}

//Type 'Int' cannot be used as a boolean; test for '!= 0' instead

if i != 0 {
    print("xyz*****")
}

//Tuples
let http404Error = (404, "Not Found")

//decompose a tuple’s contents
let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)")
print("The status message is \(statusMessage)")

//If you only need some of the tuple’s values, ignore parts of the tuple with an underscore (_) when you decompose the tuple:
let (justTheStatusCode, _) = http404Error
print("The status code is \(justTheStatusCode)")

//Alternatively, access the individual element values in a tuple using index numbers starting at zero:
print("The status code is \(http404Error.0)")
print("The status message is \(http404Error.1)")

//You can name the individual elements in a tuple when the tuple is defined:
let http200Status = (statusCode: 200, description: "OK")
print("The status code is \(http200Status.statusCode)")
print("The status description is \(http200Status.description)")

//Tuples are particularly useful as the return values of functions. A function that tries to retrieve a web page might return the (Int, String) tuple type to describe the success or failure of the page retrieval. By returning a tuple with two distinct values, each of a different type, the function provides more useful information about its outcome than if it could only return a single value of a single type

//Optionals
//You use optionals in situations where a value may be absent. An optional represents two possibilities: Either there is a value, and you can unwrap the optional to access that value, or there isn’t a value at all.

//The concept of optionals doesn’t exist in C or Objective-C.
var possibleNumber = "xx"
let convertedNumber = Int(possibleNumber) //nil

var possibleNumber1: String = "aa";
//possibleNumber1 = nil //'nil' cannot be assigned to type 'String'

//You can’t use nil with non-optional constants and variables. If a constant or variable in your code needs to work with the absence of a value under certain conditions, always declare it as an optional value of the appropriate type.

var serverResponseCode: Int? = 404
serverResponseCode = nil
var surveyAnswer: String?
// surveyAnswer is automatically set to nil

//Swift’s nil isn’t the same as nil in Objective-C. In Objective-C, nil is a pointer to a nonexistent object. In Swift, nil isn’t a pointer — it’s the absence of a value of a certain type. Optionals of any type can be set to nil, not just object types.


//If Statements and Forced Unwrapping
//If an optional has a value, it’s considered to be “not equal to” nil:
let convertedNumber1: Int? = 5
if convertedNumber1 != nil {
    print("convertedNumber contains some integer value.")
}

//Once you’re sure that the optional does contain a value, you can access its underlying value by adding an exclamation point (!) to the end of the optional’s name. The exclamation point effectively says, “I know that this optional definitely has a value; please use it.” This is known as forced unwrapping of the optional’s value:

//forced unwrapping
if convertedNumber1 != nil {
    print("convertedNumber has an integer value of \(convertedNumber1!).")
}

//Trying to use ! to access a nonexistent optional value triggers a runtime error. Always make sure that an optional contains a non-nil value before using ! to force-unwrap its value.

//Optional Binding

//You use optional binding to find out whether an optional contains a value, and if so, to make that value available as a temporary constant or variable. Optional binding can be used with if and while statements to check for a value inside an optional, and to extract that value into a constant or variable, as part of a single action.

possibleNumber = "45"
if let actualNumber = Int(possibleNumber) {
    print("The string \"\(possibleNumber)\" has an integer value of \(actualNumber)")
} else {
    print("The string \"\(possibleNumber)\" couldn't be converted to an integer")
}

//Constants and variables created with optional binding in an if statement are available only within the body of the if statement. In contrast, the constants and variables created with a guard statement are available in the lines of code that follow the guard statement

//Implicitly Unwrapped Optionals
//optionals indicate that a constant or variable is allowed to have “no value”. Optionals can be checked with an if statement to see if a value exists, and can be conditionally unwrapped with optional binding to access the optional’s value if it does exist.

//Sometimes it’s clear from a program’s structure that an optional will always have a value, after that value is first set. In these cases, it’s useful to remove the need to check and unwrap the optional’s value every time it’s accessed, because it can be safely assumed to have a value all of the time.

//These kinds of optionals are defined as implicitly unwrapped optionals. You write an implicitly unwrapped optional by placing an exclamation point (String!) rather than a question mark (String?) after the type that you want to make optional.

//The primary use of implicitly unwrapped optionals in Swift is during class initialization
let possibleString: String? = "An optional string."
let forcedString: String = possibleString! // requires an exclamation point

let assumedString: String! = "An implicitly unwrapped optional string."
let implicitString: String = assumedString // no need for an exclamation point

//You can think of an implicitly unwrapped optional as giving permission for the optional to be force-unwrapped if needed. When you use an implicitly unwrapped optional value, Swift first tries to use it as an ordinary optional value; if it can’t be used as an optional, Swift force-unwraps the value

//In code below, optionalString doesn’t have an explicit type so it’s an ordinary optional.
let optionalString = assumedString
// The type of optionalString is "String?" and assumedString isn't force-unwrapped.

//If an implicitly unwrapped optional is nil and you try to access its wrapped value, you’ll trigger a runtime error. The result is exactly the same as if you place an exclamation point after a normal optional that doesn’t contain a value.

//You can check whether an implicitly unwrapped optional is nil the same way you check a normal optional:
if assumedString != nil {
    print(assumedString!)
}
// Prints "An implicitly unwrapped optional string."

//You can also use an implicitly unwrapped optional with optional binding, to check and unwrap its value in a single statement:

if let definiteString = assumedString {
    print(definiteString)
}
// Prints "An implicitly unwrapped optional string."

//Error Handling
//When a function encounters an error condition, it throws an error. That function’s caller can then catch the error and respond appropriately.

func canThrowAnError() throws {
    // this function may or may not throw an error
}

//Swift automatically propagates errors out of their current scope until they’re handled by a catch clause.

do {
    try canThrowAnError()
    // no error was thrown
} catch {
    // an error was thrown
}

//Here’s an example of how error handling can be used to respond to different error conditions:

func makeASandwich() throws {
    // ...
}

/*
do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients(let ingredients) {
    buyGroceries(ingredients)
}
*/





