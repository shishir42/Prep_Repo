function quickselect(arr, k) {
    if (arr.length === 0 || k < 1 || k > arr.length) {
      return null;
    }
  
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== pivotIndex) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
  
    if (k === left.length + 1) {
      return pivot;
    } else if (k <= left.length) {
      return quickselect(left, k);
    } else {
      return quickselect(right, k - left.length - 1);
    }
  }

  function quickselectLargest(arr, k) {
    if (arr.length === 0 || k < 1 || k > arr.length) {
      return null;
    }
  
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== pivotIndex) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
  
    const rank = arr.length - left.length;
  
    if (k === rank) {
      return pivot;
    } else if (k < rank) {
      return quickselectLargest(left, k);
    } else {
      return quickselectLargest(right, k - rank + 1);
    }
  }
  
  
  console.log(quickselect([7, 10, 4, 3, 20, 15], 3));
  console.log(quickselectLargest([3, 6, 2, 8, 9, 1], 2));

//use heap-max and heap-min 
  