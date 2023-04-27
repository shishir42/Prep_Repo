const reverseString1 = (str) =>{
    //split the array into array of characters 
    const arr = str.split("");

    //reverse the array
    arr.reverse();

    //Join the array back into a string 
    const reverseStr = arr.join('');

    return reverseStr;
}

console.log(reverseString1('Hello, world!'));

//Without using inbuilt function 
const reverseString2 = (str) =>{
    let reversedString = '';
    for(let i=str.length-1; i>=0; i--){
        reversedString +=str[i];
    }

    return reversedString;
}

console.log(reverseString2('Hello, world!'));

//use constant space
const reverseString3 = (str) =>{
    //convert string to an array of character
    const arr = str.split('');

    //loop through half of the array 
    for(let i=0; i<Math.floor(arr.length/2); i++){
         // Swap the characters at opposite ends of the array
         const temp = arr[i];
         arr[i] = arr[arr.length - 1 -i];
         arr[arr.length - 1 -i] = temp;
    }

    const reversedStr = arr.join('');
    return reversedStr;
}

console.log(reverseString3('Hello, world!'));

//use swap function 
const reverseString4 = (str) =>{
    //convert string to an array of character
    const arr = str.split('');

    function swap(arr, i, j){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i=0; i<Math.floor(arr.length/2); i++){
        swap(arr, i, arr.length-1-i);
    }

    const reverseStr = arr.join('');

    return reverseStr;
}

console.log(reverseString3('Hello, world!'));