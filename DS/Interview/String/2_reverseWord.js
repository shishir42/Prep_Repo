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
