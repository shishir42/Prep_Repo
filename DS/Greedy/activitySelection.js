const activitySelection = (start, finish) => {
    const n = start.length;
    const selected = [0];
    let lastSelected = 0;
    for(let i=1; i<n; i++){
        if(start[i] >= finish[lastSelected]){
            selected.push(i);
            lastSelected = i;
        }
    }

    return selected;
}

let start  =  [1, 3, 0, 5, 8, 5]
let finish =  [2, 4, 6, 7, 9, 9]

console.log(activitySelection(start, finish));

// A maximum of four activities can be performed, i.e. Activity 0, Activity 1, Activity 3, and Activity 4[0-based indexing]. 

// Output: [0, 1, 3, 4]


console.log(activitySelection( [10, 12, 20], [20, 25, 30]));