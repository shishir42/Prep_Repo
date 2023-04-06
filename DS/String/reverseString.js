const reverseString = (arr) =>{
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

console.log(reverseString(['h','e','l','l','0']));

//sc O(1), tc O(n)