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