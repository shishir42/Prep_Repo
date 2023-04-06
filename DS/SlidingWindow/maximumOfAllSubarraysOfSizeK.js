const maximumOfAllSubarraysOfSizeK = (arr, k) =>{
    const size = arr.length;
    let max = 0;
    const maxList = [];
    for(let i=0; i<=size-k;i++){
        max = arr[i];
        for(let j=i; j<i+k;j++){
            max = Math.max(max, arr[j]);
            // console.log(arr[j]);
        }
        // console.log('\n');
        maxList.push(max);
    }

    return maxList;
}

console.log(maximumOfAllSubarraysOfSizeK([11 ,3 ,9 ,6], 3));
console.log(maximumOfAllSubarraysOfSizeK([1,2,3,1,4,5,2,3,6], 3));

const maximumOfAllSubarraysOfSizeK_Sliding = (arr, k) =>{
    if (arr.length === 0 || k === 0) {
        return 0;
    }

    let i = 0, j = 0, max=0;
    const size = arr.length;
    const l = [], res = [];
    while (j < size) {
        //calculation
        
        //remove all the elements which are less the elm at j
        while(l.length>0 && l[l.length-1]<arr[j]){
            l.pop();
        }

        //push the curr max and elems after it...i.e. potential max elems
        l.push(arr[j]);

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            //answer from calculation and slide the window
            
            //push the max to res array (which is stored in front of list)
            res.push(l[0])

            //check if max elm is getting lost when moving the window
            if(l[0] == arr[i]){
                l.shift()
            }
            
            i++;
            j++;
        }
    }

    return res;
}

console.log(maximumOfAllSubarraysOfSizeK_Sliding([11 ,3 ,9 ,6], 3));
console.log(maximumOfAllSubarraysOfSizeK_Sliding([1,2,3,1,4,5,2,3,6], 3));