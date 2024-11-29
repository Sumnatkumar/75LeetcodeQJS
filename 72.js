var eraseOverlapIntervals = function(intervals) {
    // Sort intervals by their end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0; // Count of overlapping intervals to remove
    let prevEnd = intervals[0][1]; // End of the first interval

    for (let i = 1; i < intervals.length; i++) {
        // If current interval overlaps with the previous one
        if (intervals[i][0] < prevEnd) {
            count++; // Remove the current interval
        } else {
            prevEnd = intervals[i][1]; // Update the end of the last non-overlapping interval
        }
    }

    return count;
};
console.log(eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]));