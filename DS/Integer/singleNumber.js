const singleNumber = (arr) => {
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++){
        ans = ans ^ arr[i];
    }

    return ans;
}

console.log(singleNumber([4,1,2,1,2]));