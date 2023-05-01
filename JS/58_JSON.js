// the syntax rules of JSON

// The data is in name/value pairs
// The data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// purpose JSON stringify

// When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"

// parse JSON string

// When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}

// Why do you need JSON
// When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

