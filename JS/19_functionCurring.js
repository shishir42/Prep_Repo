// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.


const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

// Curried functions are great to improve code reusability and functional composition.

//Q1.
function add(x){
    return function(y){
        return x + y;
    }
}

const output = add(10);
console.log(output(20)); //30 //function closure


const output1 = add(10)(20);
console.log(output); //30 //function curring

//Q2.

const f = x=> x + x;
const g = y=> y * y;
console.log(f(g(10))); //200

//Q3.
add(10)(20); 
add(10,20);

//Same definition 

function add(x){
    if(arguments.length > 1){
        let sum = 0;
        for(let i=0; i< arguments.length; i++){
            sum = sum + arguments[i];
        }
        return sum;
    }else{
        return function sum(y){
            return x+y;
         }
    }
}


