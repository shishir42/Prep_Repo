// Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

const reverseWordsIII = (str) =>{
  // Split the string into an array of words
  const words = str.split(" ");

  // Loop through each word and reverse its characters
  for(let i=0; i<words.length; i++){
    words[i] = words[i].split("").reverse().join("");
  }

  // Join the reversed words into a new string
  return words.join(" ");
}

console.log(reverseWordsIII("Let's Code Challenge")); // Output: "s'teL edoC egnellahC"
console.log(reverseWordsIII("Hello World")); // Output: "olleH dlroW"



const reversedWords = (str) =>{
    const arr = str.split(' ');
    arr.reverse();
    const reversedStr = arr.join(" ");
    return reversedStr;
}

const str = 'geeks quiz practice code';
console.log(reversedWords(str));

//Using constant space
const reversedWords1 = (str) =>{
    const reverseString = (s, start, end)=>{
        while(start < end){
            // [s[start], s[end]] = [s[end], s[start]];
            const temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    }

    reverseString(str, 0, str.length - 1);

   // Reverse each word in the string
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      reverseString(str, start, i - 1);
      start = i + 1;
    } else if (i === str.length - 1) {
      reverseString(str, start, i);
    }
  }

  return str;
}
  
  

// console.log(reverseWords1(str));

function reverseWords2(str) {
    // Convert the string to an array of characters
    const arr = str.split('');
    
    // Define a function to reverse the characters in a range of indices
    function reverseRange(arr, start, end) {
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
    
    // Reverse the whole array
    reverseRange(arr, 0, arr.length - 1);
    
    // Reverse each word in the array
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        reverseRange(arr, start, i - 1);
        start = i + 1;
      }
    }
    
    // Reverse the last word in the array
    reverseRange(arr, start, arr.length - 1);
    
    // Join the array back into a string
    const reversedStr = arr.join('');
    
    return reversedStr;
  }
  
  console.log(reverseWords2(str));

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