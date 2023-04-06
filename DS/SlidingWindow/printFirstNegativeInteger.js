const printFirstNegativeInteger = (arr, k) => {
    if (arr.length === 0 || k === 0) {
        return 0;
    }

    let i = 0; j = 0;
    const size = arr.length;
    const tempStore = [], finalResult = [];
    while (j < size) {
        if (arr[j] < 0) {
            tempStore.push(arr[j]);
        }
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            if (tempStore.length === 0) {
                finalResult.push(0);
            } else {
                finalResult.push(tempStore[0]);
                if (arr[i] < 0) {
                    tempStore.splice(0, 1);
                }
            }
            i++;
            j++;
        }
    }

    return finalResult;
}

console.log(printFirstNegativeInteger([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(printFirstNegativeInteger([-5, 1, 2, -6, 9], 2));
console.log(printFirstNegativeInteger([10, -1, -5, 7, -15, 20, 18, 24],3));


const firstNegativeNumber = (arr, k) => {
    const size = arr.length;
    const firstNegativeNumber = [];
    for(let i=0; i<=size-k;i++){
        let negativeNum = 0;
        for(let j=i;j<i+k;j++){
            if(arr[j]<0){
                negativeNum = arr[j];
                break;
            }
        }
        firstNegativeNumber.push(negativeNum);
    }

    return firstNegativeNumber;
}

console.log(firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(firstNegativeNumber([-5, 1, 2, -6, 9], 2));
console.log(firstNegativeNumber([10, -1, -5, 7, -15, 20, 18, 24],3));

