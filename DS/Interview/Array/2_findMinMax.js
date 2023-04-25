const findMinMaxNaive = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }

        if(arr[i] > max){
            max = arr[i];
        }
    }

    return {min, max};
}

console.log(findMinMaxNaive([3, 2, 1, 56, 10000, 167]));

const findMinMaxDC = (arr, start, end) => {
    if(start === end){
        return {min: arr[start], max: arr[start]}
    }

    if(end === start + 1){
        return {min: Math.min(arr[start], arr[end]), max: Math.max(arr[start], arr[end])}
    }

    const mid = Math.floor((start + end)/2);
    const left = findMinMaxDC(arr, start, mid); 
    const right = findMinMaxDC(arr, mid+1, end);

    return{
        min: Math.min(left.min, right.min),
        max: Math.max(left.max, right.max),
    }
}

function findMinMax(arr) {
    return findMinMaxDC(arr, 0, arr.length - 1);
}

console.log(findMinMax([3, 2, 1, 56, 10000, 167]));
