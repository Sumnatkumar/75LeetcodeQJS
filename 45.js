var minReorder = function(n, connections) {
    const graph = new Map();

    // Build the bidirectional graph
    for (let [from, to] of connections) {
        if (!graph.has(from)) graph.set(from, []);
        if (!graph.has(to)) graph.set(to, []);

        graph.get(from).push([to, 1]); // Original direction (needs reorder)
        graph.get(to).push([from, 0]); // Reverse direction (correct)
    }

    let count = 0;
    const visited = new Array(n).fill(false);

    function dfs(city) {
        visited[city] = true;

        for (let [neighbor, needsReorder] of graph.get(city)) {
            if (!visited[neighbor]) {
                count += needsReorder; // Add to count if the road needs to be reversed
                dfs(neighbor); // Visit the next city
            }
        }
    }

    dfs(0); // Start DFS from city 0
    return count;
};
let n = 6;
let connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5]
];
console.log(minReorder(n, connections)); // Output: 3