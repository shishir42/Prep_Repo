//Closures are self-contained blocks of functionality that can be passed around and used in your code. Closures in Swift are similar to blocks in C and Objective-C and to lambdas in other programming languages.

//Closures can capture and store references to any constants and variables from the context in which they’re defined. This is known as closing over those constants and variables. Swift handles all of the memory management of capturing for you.


//Global and nested functions, as introduced in Functions, are actually special cases of closures. Closures take one of three forms:
//Global functions are closures that have a name and don’t capture any values.
//Nested functions are closures that have a name and can capture values from their enclosing function.
//Closure expressions are unnamed closures written in a lightweight syntax that can capture values from their surrounding context.


let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]
func backward(_ s1: String, _ s2: String) -> Bool {
    return s1 > s2
}

var reversedNames = names.sorted(by: backward)
print("reversedNames \(reversedNames)")

reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in return s1 > s2 } )
print("reversedNames \(reversedNames)")

//Inferring Type From Context
reversedNames = names.sorted(by: { s1, s2 in return s1 > s2 } )
print("reversedNames \(reversedNames)")

//Implicit Returns from Single-Expression Closures
reversedNames = names.sorted(by: { s1, s2 in s1 > s2 } )
print("reversedNames \(reversedNames)")

//Shorthand Argument Names
reversedNames = names.sorted(by: { $0 > $1 } )
print("reversedNames \(reversedNames)")

//Operator Methods
reversedNames = names.sorted(by: >)
print("reversedNames \(reversedNames)")

//Trailing Closures
func someFunctionThatTakesAClosure(closure: () -> Void) {
    // function body goes here
}

// Here's how you call this function without using a trailing closure:
someFunctionThatTakesAClosure(closure: {
    // closure's body goes here
})

// Here's how you call this function with a trailing closure instead:
someFunctionThatTakesAClosure() {
    // trailing closure's body goes here
}

let digitNames = [
    0: "Zero", 1: "One", 2: "Two",   3: "Three", 4: "Four",
    5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
]
let numbers = [16, 58, 510]

let strings = numbers.map { (number) -> String in
    var number = number
    var output = ""
    repeat {
        output = digitNames[number % 10]! + output
        number /= 10
    } while number > 0
    return output
}

print("strings---> \(strings)")

//func loadPicture(from server: Server, completion: (Picture) -> Void, onFailure: () -> Void) {
//    if let picture = download("photo.jpg", from: server) {
//        completion(picture)
//    } else {
//        onFailure()
//    }
//}
//
//loadPicture(from: someServer) { picture in
//    someView.currentPicture = picture
//} onFailure: {
//    print("Couldn't download the next picture.")
//}

//Capturing Values
//A closure can capture constants and variables from the surrounding context in which it’s defined. The closure can then refer to and modify the values of those constants and variables from within its body, even if the original scope that defined the constants and variables no longer exists.

//In Swift, the simplest form of a closure that can capture values is a nested function, written within the body of another function. A nested function can capture any of its outer function’s arguments and can also capture any constants and variables defined within the outer function.

//Here’s an example of a function called makeIncrementer, which contains a nested function called incrementer. The nested incrementer() function captures two values, runningTotal and amount, from its surrounding context. After capturing these values, incrementer is returned by makeIncrementer as a closure that increments runningTotal by amount each time it’s called.

func makeIncrementer(forIncrement amount: Int) -> () -> Int {
    var runningTotal = 0
    func incrementer() -> Int {
        runningTotal += amount
        return runningTotal
    }
    return incrementer
}

//As an optimization, Swift may instead capture and store a copy of a value if that value isn’t mutated by a closure, and if the value isn’t mutated after the closure is created.

//Swift also handles all memory management involved in disposing of variables when they’re no longer needed.

//If you assign a closure to a property of a class instance, and the closure captures that instance by referring to the instance or its members, you will create a strong reference cycle between the closure and the instance.

//Closures Are Reference Types
//incrementBySeven and incrementByTen are constants, but the closures these constants refer to are still able to increment the runningTotal variables that they have captured. This is because functions and closures are reference types.

//Whenever you assign a function or a closure to a constant or a variable, you are actually setting that constant or variable to be a reference to the function or closure. In the example above, it’s the choice of closure that incrementByTen refers to that’s constant, and not the contents of the closure itself.

//Escaping Closures
//A closure is said to escape a function when the closure is passed as an argument to the function, but is called after the function returns. When you declare a function that takes a closure as one of its parameters, you can write @escaping before the parameter’s type to indicate that the closure is allowed to escape.

var completionHandlers: [() -> Void] = []
func someFunctionWithEscapingClosure(completionHandler: @escaping () -> Void) {
    completionHandlers.append(completionHandler)
}

//An escaping closure that refers to self needs special consideration if self refers to an instance of a class. Capturing self in an escaping closure makes it easy to accidentally create a strong reference cycle.

//Normally, a closure captures variables implicitly by using them in the body of the closure, but in this case you need to be explicit. If you want to capture self, write self explicitly when you use it, or include self in the closure’s capture list. Writing self explicitly lets you express your intent, and reminds you to confirm that there isn’t a reference cycle. For example, in the code below, the closure passed to someFunctionWithEscapingClosure(_:) refers to self explicitly. In contrast, the closure passed to someFunctionWithNonescapingClosure(_:) is a nonescaping closure, which means it can refer to self implicitly.

func someFunctionWithNonescapingClosure(closure: () -> Void) {
    closure()
}

class SomeClass {
    var x = 10
    func doSomething() {
        someFunctionWithEscapingClosure { self.x = 100 }
        someFunctionWithNonescapingClosure { x = 200 }
    }
}

let instance = SomeClass()
instance.doSomething()
print(instance.x)
// Prints "200"

completionHandlers.first?()
print(instance.x)
// Prints "100"

//Here’s a version of doSomething() that captures self by including it in the closure’s capture list, and then refers to self implicitly:

class SomeOtherClass {
    var x = 10
    func doSomething() {
        someFunctionWithEscapingClosure { [self] in x = 100 }
        someFunctionWithNonescapingClosure { x = 200 }
    }
}

//If self is an instance of a structure or an enumeration, you can always refer to self implicitly. However, an escaping closure can’t capture a mutable reference to self when self is an instance of a structure or an enumeration. Structures and enumerations don’t allow shared mutability,

struct SomeStruct {
    var x = 10
    mutating func doSomething() {
        someFunctionWithNonescapingClosure { x = 200 }  // Ok
        someFunctionWithEscapingClosure { x = 100 }     // Error
    }
}

//The call to the someFunctionWithEscapingClosure function in the example above is an error because it’s inside a mutating method, so self is mutable. That violates the rule that escaping closures can’t capture a mutable reference to self for structures.

//Autoclosures
//An autoclosure is a closure that’s automatically created to wrap an expression that’s being passed as an argument to a function. It doesn’t take any arguments, and when it’s called, it returns the value of the expression that’s wrapped inside of it. This syntactic convenience lets you omit braces around a function’s parameter by writing a normal expression instead of an explicit closure.

//Overusing autoclosures can make your code hard to understand. The context and function name should make it clear that evaluation is being deferred.

// customersInLine is ["Ewa", "Barry", "Daniella"]
func serve(customer customerProvider: @autoclosure () -> String) {
    print("Now serving \(customerProvider())!")
}
serve(customer: customersInLine.remove(at: 0))
// Prints "Now serving Ewa!"

//If you want an autoclosure that’s allowed to escape, use both the @autoclosure and @escaping attributes.


