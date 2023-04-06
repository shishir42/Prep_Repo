// https://leetcode.com/problems/k-closest-points-to-origin/

const kClosestPointToOrigin = (points, k) => {

    for (let i = 0; i < points.length; i++) {
        maxHeap.push({ points[i][0] * points[i][0] + points[i][1] * points[i][1], {points[i][0], points[i][1]}})
    }
}

// Heap Stored: (sq root of x2 + y2), (x0, y0) or (distance, coordinate)


function distance(x, y) {
    return Math.sqrt(x * x + y * y);
}

function kClosest(points, K) {
    points.sort((a, b) => distance(a[0], a[1]) - distance(b[0], b[1]));
    return points.slice(0, K);
}

const points = [[1, 3], [-2, 2], [5, 8], [-4, -2], [2, 1]];
const K = 3;

console.log(kClosest(points, K)); // Output: [[1, 3], [-2, 2], [2, 1]]