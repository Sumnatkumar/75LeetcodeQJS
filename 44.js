// var findCircleNum = function(isConnected) {
//     let n = isConnected.length;
//     let visited = new Array(n).fill(false);
//     let provinces = 0;

//     function dfs(city) {
//         for (let i = 0; i < n; i++) {
//             if (isConnected[city][i] === 1 && !visited[i]) {
//                 visited[i] = true; // Mark the city as visited
//                 dfs(i); // Recursively visit connected cities
//             }
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//             provinces++; // Start a new province
//             visited[i] = true;
//             dfs(i); // Visit all cities in this province
//         }
//     }

//     return provinces;
// };
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let parent = new Array(n).fill().map((_, i) => i); // Initialize each city as its own parent

    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]); // Path compression
        return parent[x];
    }

    function union(x, y) {
        let rootX = find(x);
        let rootY = find(y);
        if (rootX !== rootY) parent[rootY] = rootX; // Merge provinces
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }

    let provinces = new Set();
    for (let i = 0; i < n; i++) {
        provinces.add(find(i)); // Find unique root nodes
    }

    return provinces.size;
};

let isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];
console.log(findCircleNum(isConnected)); // Output: 2