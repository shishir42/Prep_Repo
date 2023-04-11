// https://www.digitalocean.com/community/conceptual-articles/module-design-pattern-in-javascript

// JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code.
// For those that are familiar with object-oriented languages, modules are JavaScript “classes”. One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes. The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.
// Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that protect variables and methods (however, it will return an object instead of a function). This is what it looks like:

(function () {

    // declare private variables and/or functions

    return {
        // declare public variables and/or functions
    }

})();

// Here we instantiate the private variables and/or functions before returning our object that we want to return. Code outside of our closure is unable to access these private variables since it is not in the same scope. 

var HTMLChanger = (function () {
    var contents = 'contents'

    var changeHTML = function () {
        // var element = document.getElementById('attribute-to-change');
        // element.innerHTML = contents;
        console.log('changeHTML****')
    }

    return {
        callChangeHTML: function () {
            changeHTML();
            console.log(contents);
        }
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined

// A variation of the module pattern is called the Revealing Module Pattern. The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal. The direct implementation looks like this:

var Exposer = (function () {
    var privateVariable = 10;

    var privateMethod = function () {
        console.log('Inside a private method!');
        privateVariable++;
    }

    var methodToExpose = function () {
        console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function () {
        privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined


// Although this looks much cleaner, an obvious disadvantage is unable to reference the private methods. This can pose unit testing challenges. Similarly, the public behaviors are non-overridable.