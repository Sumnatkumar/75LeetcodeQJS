// var equalPairs = function(grid) {
//     let n = grid.length;
//     let transpose_grid = grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (JSON.stringify(grid[i]) === JSON.stringify(transpose_grid[j])) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };
var equalPairs = function(grid) {
    const n = grid.length;
    let count = 0;

    // Convert each row into a string for easy comparison
    const rowStrings = grid.map(row => row.join(','));

    // Create columns and convert each to a string
    for (let col = 0; col < n; col++) {
        let columnString = '';
        for (let row = 0; row < n; row++) {
            columnString += grid[row][col] + ',';
        }

        // Compare the column string with each row string
        for (let rowString of rowStrings) {
            if (rowString === columnString.slice(0, -1)) {
                count++;
            }
        }
    }

    return count;
};

console.log(equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]
]));