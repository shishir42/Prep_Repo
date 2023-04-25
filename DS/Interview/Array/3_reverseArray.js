const reverseArray = (arr) =>{
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArray_1(arr) {
    return arr.reverse();
}

function reverseArray_2(arr) {
    return [...arr].reverse();
}
    
function reverseArray_3(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
}
  