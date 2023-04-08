// Short circuit conditions are meant for condensed way of writing simple if statements. Let's demonstrate the scenario using an example. If you would like to login to a portal with an authentication condition, the expression would be as below,

// if (authenticate) {
//   loginToPorta();
// }
// Since the javascript logical operators evaluated from left to right, the above expression can be simplified using && logical operator

// authenticate && loginToPorta();