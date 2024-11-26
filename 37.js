var longestZigZag = function(root) {
    let maxZigZag = 0;

    const dfs = (node, isLeft, length) => {
        if (!node) return;

        // Update the global maximum length
        maxZigZag = Math.max(maxZigZag, length);

        // Recursive DFS:
        // If the current direction is left, move right and reset left
        dfs(node.left, true, isLeft ? 1 : length + 1);
        // If the current direction is right, move left and reset right
        dfs(node.right, false, !isLeft ? 1 : length + 1);
    };

    // Start DFS from the root in both directions
    dfs(root.left, true, 1); // Start by moving left
    dfs(root.right, false, 1); // Start by moving right

    return maxZigZag;
};
// Helper function to create a binary tree from an array
function createBinaryTree(arr) {
    if (!arr.length || arr[0] === null) return null;

    let root = { val: arr[0], left: null, right: null };
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null) {
            current.left = { val: arr[i], left: null, right: null };
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = { val: arr[i], left: null, right: null };
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// Testing the function
let root = createBinaryTree([1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]);
console.log(longestZigZag(root)); // Output: 3