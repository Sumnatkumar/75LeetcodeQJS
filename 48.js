var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    let queue = [];
    let freshCount = 0;

    // Step 1: Collect initial rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]); // Add rotten orange to the queue
            } else if (grid[r][c] === 1) {
                freshCount++; // Count fresh oranges
            }
        }
    }

    // Edge case: No fresh oranges initially
    if (freshCount === 0) return 0;

    let minutes = 0;

    // Step 2: BFS to spread the rot
    while (queue.length > 0 && freshCount > 0) {
        let newQueue = []; // To store next level of rotten oranges

        for (let [r, c] of queue) {
            for (let [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;

                // Check if within bounds and if the orange is fresh
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {
                    // Rot this fresh orange
                    grid[newRow][newCol] = 2;
                    freshCount--;
                    newQueue.push([newRow, newCol]);
                }
            }
        }

        queue = newQueue;
        minutes++;
    }

    // If there are still fresh oranges left, return -1
    return freshCount === 0 ? minutes : -1;
};

// Example usage:
console.log(orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
])); // Output: 4
console.log(orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
])); // Output: -1
console.log(orangesRotting([
    [0, 2]
])); // Output: 0