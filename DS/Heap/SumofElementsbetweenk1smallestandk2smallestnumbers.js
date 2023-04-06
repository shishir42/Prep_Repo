const SumofElementsbetweenk1smallestandk2smallestnumbers = (arr ,k1, k2) =>{
    arr.sort();
    let first = findKthSmallest(arr, k1);
    let second = findKthSmallest(arr, k2);
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > first && arr[i] < second){
            sum = sum + arr[i];
        }
    }
}

let arr = [1, 3, 12, 5, 15, 11];
let k1 = 3, k2 = 6;

