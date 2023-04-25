// Find subarray with given sum using Nested loop
const subarraySum = (arr, sum) =>{
    for(let i=0; i<arr.length; i++){
        let currentSum = arr[i];
        for(let j=i+1; j< arr.length; j++){
            if(currentSum === sum){
                return arr.slice(i,j);
            }else if(currentSum > sum || j === arr.length){
                break;
            }else{
                currentSum += arr[j];
            }
        }
    }
    return null;
}

const subArraySlidingWindow = (arr, target) => {
    if(arr.length === 0 || target === 0){
        return null;
    }

    let sum = 0;
    let i=0, j=0;
    let size = arr.length;

    while(j<size){
        if(sum === target){
            return arr.slice(i, j);
        }else if (sum > target){
            sum -= arr[i]
            i++;
        }else{
            sum +=arr[j];
            j++;
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const sum = 12;
const subarray = subarraySum(arr, sum);
console.log('sub array ********', subarray);

const subarray1 = subArraySlidingWindow(arr, sum);
console.log('sub array1 ********', subarray1);
