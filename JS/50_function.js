//named function are hoisted

function add(num1, num2){
    return num1 + num2;
}

function test(f, num1, num2){
    const sum = f(num1, num2);
    return sum;
}

const output = test(add, 10, 20);
console.log('output ****', output);

function one(){
    console.log('one*****');
    const count = 10
    function two(){
        console.log('two*****', count);
    }
    return two;
}

const output_1= one();
output_1();

console.log(square);//reference error because of TDZ
console.log(square(5));

const square = function(n){
    return n*n;
}

console.log(square_1); //undefined
console.log(square_1(5));///reference error because of function expression are not hoisted
var square_1 = function(n){
    return n*n;
}

//Q2:
function test(theObject){
    theObject.make = 'Toyota';
}

const car_details = {
    make:'Honda',
    model: 'Accord',
    year: 1998
}

console.log('car 1', car_details.make);
test(car_details);//pass by reference, shallow copy
console.log('car 2', car_details.make);

// Q:3
var num1 = 20,
    num2 = 3,
    name = 'Chamakh';
function getScore() {
    var num1 = 2,
        num2 = 3;
    function add() {
        return name + ' scored ' + (num1 + num2); //name is access by outside the variable and it is closure
    }
    return add();
}
console.log(getScore());

//Q:4
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); 
b = addSquares(3, 4); 
c = addSquares(4, 5);
console.log(a,b,c);

//Q:5
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
A(1);

//closure + function nesting
function A(x=1) {
    function B(y=2) {
      function C(z=3) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
A(1);
