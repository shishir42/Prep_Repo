function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]); // sort boxTypes array in descending order of units per box
    let maxUnits = 0;
  
    for (const [numBoxes, unitsPerBox] of boxTypes) { // loop through boxTypes and add the maximum possible number of units to maxUnits
      const boxesToAdd = Math.min(numBoxes, truckSize);
      maxUnits += boxesToAdd * unitsPerBox;
      truckSize -= boxesToAdd;
      if (truckSize === 0) break; // if the truck is full, exit the loop
    }
  
    return maxUnits;
  }

  const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1]
  ];
  
  const truckSize = 4;
  
  const maxUnits = maximumUnits(boxTypes, truckSize);
  
  console.log(maxUnits); // prints 8
  

  
//   Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
//   Output: 8
//   Explanation: There are:
//   - 1 box of the first type that contains 3 units.
//   - 2 boxes of the second type that contain 2 units each.
//   - 3 boxes of the third type that contain 1 unit each.
//   You can take all the boxes of the first and second types, and one box of the third type.
//   The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.  