var calcEquation = function(equations, values, queries) {
    const graph = new Map();

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let value = values[i];

        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);

        graph.get(a).push([b, value]); // a -> b with weight 'value'
        graph.get(b).push([a, 1 / value]); // b -> a with weight '1 / value'
    }

    // DFS function to find the value of a/b
    function dfs(current, target, visited) {
        if (!graph.has(current) || !graph.has(target)) return -1.0;
        if (current === target) return 1.0;

        visited.add(current);

        for (let [neighbor, weight] of graph.get(current)) {
            if (!visited.has(neighbor)) {
                let result = dfs(neighbor, target, visited);
                if (result !== -1.0) {
                    return result * weight; // Accumulate the product along the path
                }
            }
        }

        return -1.0; // No path found
    }

    // Process each query
    const results = [];
    for (let [numerator, denominator] of queries) {
        if (!graph.has(numerator) || !graph.has(denominator)) {
            results.push(-1.0);
        } else {
            results.push(dfs(numerator, denominator, new Set()));
        }
    }

    return results;
};

// Example usage:
const equations = [
    ["a", "b"],
    ["b", "c"]
];
const values = [2.0, 3.0];
const queries = [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"]
];
console.log(calcEquation(equations, values, queries)); // Output: [6.0, 0.5, -1.0, 1.0, -1.0]