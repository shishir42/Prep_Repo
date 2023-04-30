// Topics: Math;Geometry

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // Check if the rectangles don't overlap along the x-axis or y-axis
    if (rec1[2] <= rec2[0] ||  // Left edge of rec1 is to the left of the right edge of rec2
        rec1[0] >= rec2[2] ||  // Right edge of rec1 is to the right of the left edge of rec2
        rec1[3] <= rec2[1] ||  // Bottom edge of rec1 is below the top edge of rec2
        rec1[1] >= rec2[3]) {  // Top edge of rec1 is above the bottom edge of rec2
      return false;
    }
    
    // If the rectangles overlap along both the x-axis and y-axis, return true
    return true;
  };
  

//   In this code, the isRectangleOverlap function takes two arrays rec1 and rec2 as input, each representing a rectangle with coordinates [x1, y1, x2, y2] (where (x1, y1) is the bottom-left corner of the rectangle and (x2, y2) is the top-right corner of the rectangle). The function returns true if the two rectangles overlap, and false otherwise.

console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3])); // Output: true

// In this example, the output of the isRectangleOverlap function is true, indicating that the two rectangles overlap. The first rectangle has bottom-left corner (0, 0) and top-right corner (2, 2), and the second rectangle has bottom-left corner (1, 1) and top-right corner (3, 3).