function firstBadVersion(n) {
    let left = 1;
    let right = n;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

const bad = 4;
function isBadVersion(n) {
    return n >= bad;
}

console.log(firstBadVersion(5)); // Output: 4
