console.log('Your code goes here...!!!');

function add(n1: number, n2: number){
    if(n1 === 0){
        return 0;
    }

    return n1+n2;
}

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);
console.log(result);
//Enum
enum RoleType {ADMIN, READ_ONLY, AUTHOR}

const person: {name: string, age: number, hobbies: string[], role: [number, string], roleType: RoleType}={
    name: 'Shishir',
    age:35, 
    hobbies: ['Sports', 'Cycling'],
    role:[2, 'author'],
    roleType: RoleType.ADMIN
}

person.role.push('aaa');
console.log(person.role, "   ", person.roleType);

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  } = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

console.log(product.details.title);


let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

//Tuple


//Union type

function combine(input1: number | string, input2: number | string){
    if(typeof input1 === "number" && typeof input2 === "number"){
        return input1 + input2;
    }else{
        return input1.toString() + input2.toString();
    }
    
}

const combineAge = combine(30, 20);
console.log(combineAge);

const combineNames = combine('Shishir', 'Roy');
console.log(combineNames);


// Type aliases
type Combinable = number | string;
// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
}
   
function isOlder(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
}

type User_ = { name: string; age: number };
 
function greet_(user: User_) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder_(user: User_, checkAge: number) {
  return checkAge > user.age;
}

type User_1 = { name: string } | string;
let u2: User_1 = {name: 'Max'};
u2 = 'Michael';

//Functions
function add_1(n1: number, n2: number): number{
    return n1+n2;
}

function printResult(num: number){
    console.log('Result: ',num);
}

printResult(add_1(10, 10));

let combineFunction: Function;
combineFunction = add_1;

let combineFunction1: (a: number, b: number) => number;

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void){
    const result = n1+ n2;
    cb(result);
}

addAndHandle(10, 20, (result)=> {console.log('result ', result)});


function sendRequest(data: string, cb: (response: any) => void) {
    console.log(data);    
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });
  
//Unknown type 
let userInput: unknown;

userInput = 5;
userInput = 'Shishir';

//unknown vs any

let userName: string
// userName = userInput;  //error if it is "unknown", no error in case of "any"

//never type
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

// generateError("An error occurred", 500);

console.log("Ending--");

  
//watch mode
//tsc filename.ts -w  

//tsc config
//tsc --init

//V1591233
// Thank you for completing the questionnaire required to proceed with your background screening.

// Please note, we will reach out if further information is required. 

// If you have any queries, please contact us via help@sterlingrisq.com quoting your Username.

//CBA9084