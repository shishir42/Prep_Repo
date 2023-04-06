const findSumMaxSubarrayOfSizeK = (arr, k) => {
    if (arr.length === 0 || k === 0) {
        return 0;
    }

    let sum = 0, max=0;
    let i = 0, j = 0;
    const size = arr.length;
    while (j < size) {
        sum += arr[j];
        // sum = sum + arr[j];

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            max = Math.max(max, sum);
            // sum = sum - arr[i]
            sum -= arr[i]
            i++;
            j++;
        }
    }

    return max;
}

console.log(findSumMaxSubarrayOfSizeK([100, 200, 300, 400], 2));
console.log(findSumMaxSubarrayOfSizeK([1, 4, 2, 10, 2, 3, 1, 0, 20 ], 4));
console.log(findSumMaxSubarrayOfSizeK([10,20,10,40,50,10,60], 3));