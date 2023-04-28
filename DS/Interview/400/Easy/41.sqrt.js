// Sqrt(x)
// Topics: Math;Binary Search

const sqrtFloor = (x) =>{
    if(x <= 1){
        return x;
    }

    let low = 0;
    let high = x;

    while(low<=high){
        let mid = Math.floor((low + high)/2);
        let sqrt = mid * mid;

        if(sqrt === x){
            return mid;
        }else if(sqrt > x){
            high = mid-1;
        }else{
            low = mid + 1;
        }
    }

    return high;
}

console.log(sqrtFloor(16));