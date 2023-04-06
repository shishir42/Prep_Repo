
// n−(k−1)
const contiguousSubarrayOfLengthK = (arr, k) =>{
    var i, j, result = [];
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length + 1; j++) {
            result.push(arr.slice(i, j));
        }
    }
    return result;
}

console.log(contiguousSubarrayOfLengthK([1, 3, 6], 3));