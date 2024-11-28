// var nearestExit = function(maze, entrance) {
//     const rows = maze.length;
//     const cols = maze[0].length;
//     const directions = [
//         [1, 0],
//         [-1, 0],
//         [0, 1],
//         [0, -1]
//     ];
//     const queue = [
//         [entrance[0], entrance[1], 0]
//     ]; // [row, col, steps]

//     maze[entrance[0]][entrance[1]] = '+'; // Mark entrance as visited

//     while (queue.length > 0) {
//         const [row, col, steps] = queue.shift();

//         for (const [dr, dc] of directions) {
//             const newRow = row + dr;
//             const newCol = col + dc;

//             // Check if within bounds and not a wall
//             if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === '.') {
//                 // Check if it's a boundary cell (exit) and not the entrance
//                 if (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) {
//                     return steps + 1; // Return steps to this exit
//                 }

//                 // Mark cell as visited and add to queue
//                 maze[newRow][newCol] = '+';
//                 queue.push([newRow, newCol, steps + 1]);
//             }
//         }
//     }

//     return -1; // No exit found
// };
var nearestExit = function(maze, entrance) {
    let m = maze.length,
        n = maze[0].length;

    if (m == 0 && n == 0) return -1;
    let dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    let queue = new Array();
    queue.push([entrance, 0]);
    maze[entrance[0]][entrance[1]] = "+";
    while (queue.length) {
        let [pos, steps] = queue.shift();
        steps++;
        for (let d of dirs) {
            let i = pos[0] + d[0];
            let j = pos[1] + d[1];
            if (i < 0 || i >= m || j < 0 || j >= n || maze[i][j] == "+") continue;
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) { return steps; }
            queue.push([
                [i, j], steps
            ]);
            maze[i][j] = "+";
        }
    }
    return -1;
};

// Example usage:
const maze1 = [
    ["+", "+", ".", "+"],
    [".", ".", ".", "+"],
    ["+", "+", "+", "."]
];
const entrance1 = [1, 2];
console.log(nearestExit(maze1, entrance1)); // Output: 1