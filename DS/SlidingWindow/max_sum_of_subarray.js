const maxSubarray = (arr, k) =>{
    let max = 0;
    for(let i=0; i<arr.length;i++){
        let tempMax = 0;
        for(let j=i; j<i+k; j++){
            tempMax +=arr[j];
        }

        if(tempMax > max){
            max = tempMax;
        }
    }

    return max;
}

console.log(maxSubarray([100, 200, 300, 400], 2));
console.log(maxSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20 ], 4));
console.log(maxSubarray([10,20,10,40,50,10,60], 3));




//Brute Force: O(N*K) N = Size of Array.