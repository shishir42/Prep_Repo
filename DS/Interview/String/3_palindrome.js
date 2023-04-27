const isPalindromeLinkedList = (head) =>{
    let values = [];
    let current = head;
    while(current != null){
        values.push(current.value);
        current = current.next;
    }

    for(let i=0, j=values.length-1; i<j; i++, j--){
        if(values[i] !== values[j]){
            return false;
        }
    }

    return true;
}

const head = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } };
console.log(isPalindromeLinkedList(head)); // Output: true

const checkPalindrome = (str)=>{
    const len = str.length;
    for(let i=0; i<len/2; i++){
        if(str[i] !== str[len-1-i]){
            return false;
        }
    }

    return true;
}

//using two pointers 
const isPalindrome = (s) =>{
    // Convert the string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Use two pointers to compare characters at the beginning and end of the string
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
        return false;
        }
    }

    return true;
}

console.log(checkPalindrome('madam'));
const str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));

function isPalindromeNumber(num) {
    // Convert the number to a string
    const numStr = num.toString();
  
    // Use two pointers to compare digits at the beginning and end of the string
    for (let i = 0, j = numStr.length - 1; i < j; i++, j--) {
      if (numStr[i] !== numStr[j]) {
        return false;
      }
    }
  
    return true;
  }

  console.log(isPalindromeNumber(121));