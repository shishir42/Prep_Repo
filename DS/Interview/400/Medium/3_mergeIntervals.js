// Topics: Array;Sorting
// To check if two intervals [a, b] and [c, d] overlap, the following condition must hold true:
// max(a, c) <= min(b, d)
// For example, consider the intervals [1, 3] and [2, 6]. Here, a = 1, b = 3, c = 2, and d = 6. Therefore, the condition becomes:

// max(1, 2) <= min(3, 6)
// 2 <= 3
// Since this condition is true, the two intervals overlap.

/*
if (intervals[i][0] <= merged[merged.length-1][1]) {
    // merge the current interval with the previous interval
    merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], intervals[i][1]);
  } else {
    // add the current interval to the merged list
    merged.push(intervals[i]);
  }
*/

const mergeIntervals = (intervals) => {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]); //ascending order based on the first element of each interval.

    // For example, given an array [[3, 6], [1, 2], [2, 4]], applying sort() with the above comparison function will result in [[1, 2], [2, 4], [3, 6]].

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        const prev = result[result.length - 1];
        if(curr[0] <= prev[1]){
            prev[1] = Math.max(curr[1], prev[1]);
        }else{
            result.push(curr);
        }
    }

    return result;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];
const merged = mergeIntervals(intervals);
console.log(merged); // Output: [[1,6],[8,10],[15,18]]