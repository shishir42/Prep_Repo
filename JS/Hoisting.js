// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

console.log(message); //output : undefined
var message = "The variable Has been hoisted";

// The above code looks like as below to the interpreter,

var message;
console.log(message);
message = "The variable Has been hoisted";

// Note that hoisting can lead to unexpected behavior and can make code difficult to read and maintain. It is generally recommended to declare variables and functions at the beginning of their respective scopes to avoid any confusion.

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Variable hoisting
function test(){
    console.log('Value of x is ' + x); // value of x is undefined because of hoisting
    var x;
}

function test1(){
    console.log('Value of x is ' + x); // value of x is undefined because of hoisting
    var x = 60;
}

function test1(){
    console.log('Value of x is ' + x); // Reference error, cannot access x before initialization 
    let x = 60;
}

// only work with var- why not with let and const
function test2(){
    let x;
    console.log('Value of x is ' + x); //  value of x is undefined because of hoisting
}
//1. hoisting happen but there is no default value because of that it is undefined 
//2. It goes to the state in temporal dead zone where you can't access the variable 

function test3(){
    const x;
    console.log('Value of x is ' + x); //  Syntax error, const must be initialized before used
}


function test4(){
    console.log('Value of x is ' + x); //  Reference error, cannot access x before initialization
    const x = 10;
}


//hoisted - var, let, const, function, class(under the hood all the functions) 

// Different ways to create variables in JavaScript

// Hoisting - working - only work with var- why not with let and var (+5) also w.r.t to normal and arrow functions (let or const or var are hoisted but var are initialized with undefined and let are const are in temporal zone where access are not possible, until the let and const are defined you will not be able to access)
// * unction are hoisted, why function need to be hoisted 
// * arrow function are hoisted or not


func1();
func2();

var func2 = () =>{
    console.log('print func2');
}

function func1(){
    console.log('print func1');
}

//here func1() will be print because of hoisted and variable func2 is hoisted but function is not, so here you will get error

var rate = 10;
function getRate() {
    //var rate = undefined;
    if(rate == undefined){
        var rate = 6; //here rate is local scope and it has first priority 
        return rate;
    }else{
        return 10;
    }
}

console.log("Rate is: ", getRate()); //6 because rate is same name and it give priority to local scope instead of outer scope 

var rate = 10;
function getRate1() {
    if(rate == undefined){
        let rate = 6;
        return rate;
    }else{
        return 10;
    }
}

console.log("Rate_1 is: ", getRate1()); //10 

// PURE FUNCTIONS 

// Question 1

function test(){
    var x;
    var x;
    console.log('X is ' + x); //undefined 
}
test();

function test(){
    var x  = 10;
    var x;
    console.log('X is ' + x); // 10
}
test();


function test(){
    var x  = 10;
    var x;
    var x  = 40;
    console.log('X is ' + x); // 40, because within a given scope the instance will create only once for same variable and its value gets updated with the latest one. and also variable declared with var keyword become a global scope 
}
test();


// Question 2
function varTest() {
    var x = 1;
    {
        var x = 2;  
        console.log(x);  // 2
    }
    console.log(x); //2
}

function letTest() {
    let x = 1;
    {
        var x = 2;  
        console.log(x); //Syntax error, Identifier 'x' has already been declared
    }
    console.log(x); 
}

function letTest() {
    var x = 1;
    {
        let x = 2;  
        console.log(x); //2
    }
    console.log(x); //1
}

function letTest() {
    let x = 1;
    {
        let x = 2;  
        console.log(x); //2
    }
    console.log(x); //1
}

// Question 3
function letTest() {
    let x = 1; //
    let x = 2; //Syntax Error: Identifier x is already has been declared, inside a given block you can't define the same variable twice using let and const 
    console.log(x); 
    console.log(x);
}


// Question 4
function do_something() {
    console.log(bar); //undefined
    var bar = 111;
    console.log(bar); //111
}


// Question 5
var rat = 10
function getRate() {
  if (rat === undefined) {
      var rate = 6;
      return rate;
   } else {
      return 10;
   }
}
console.log("Rate is", getRate()); //6

//Q1
//Explain the scope of temporal dead zone
{
    const func = () => console.log(letVar);
    let letVar = 3;
    func()
}

//Identify the TDZ for variable letVar
{
    // TDZ start
    const func = () => console.log(letVar); //3

     // TDZ 

    let letVar = 3;  // TDZ end
    func() //because function called after variable get initialized 
}

{
    func() //Reference error: cannot access 'func' before initialization and arrow function are not hoisted
    // TDZ start
    const func = () => console.log(letVar); 

     // TDZ 

    let letVar = 3;  // TDZ end
}

{
     
    // TDZ start
    const func = () => console.log(letVar);  //Reference error: cannot access 'letVar' before initialization
    func()
    let letVar = 3;  // TDZ end
}

// why var hoisting is present in javascript 
// How hoisting works in javascript if it interpreted
// JS engine compilation happen in 2 steps: 
// 1. scan the function and allocates the memory 
// 2. Actual execution happen

// Because compilers are written in c++ OOP language and due to the compiler capabilities, hoisting works in js even it is interpreted language. 

//How the JS engine works

welcome(); //reference error, because of tdz
const welcome = function(){
    console.log('xyx');
}

///self invoking function 
(function(){
    console.log('xyz*****');
})()