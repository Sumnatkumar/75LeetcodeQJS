// var findMinArrowShots = function(points) {
//     if (points.length === 0) return 0;

//     // Sort balloons by their end points
//     points.sort((a, b) => a[1] - b[1]);

//     let arrows = 1; // We need at least one arrow
//     let prevEnd = points[0][1]; // Position of the last arrow

//     for (let i = 1; i < points.length; i++) {
//         // If current balloon overlaps with the last arrow shot
//         if (points[i][0] > prevEnd) {
//             arrows++; // Shoot a new arrow
//             prevEnd = points[i][1]; // Update the position of the last arrow
//         }
//     }

//     return arrows;
// };
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 0;
    let prevEnd = -Infinity;
    for (const [start, end] of points) {
        if (start > prevEnd) {
            arrows++;
            prevEnd = end;
        }
    }
    return arrows;
};
console.log(findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
]));