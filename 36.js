var pathSum = function(root, targetSum) {
    const prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // Base case for paths starting from the root

    const dfs = (node, currentSum) => {
        if (!node) return 0; // Base case: if the node is null, return 0

        // Update the current prefix sum
        currentSum += node.val;

        // Check if a path with the target sum exists
        let count = prefixSumCount.get(currentSum - targetSum) || 0;

        // Update the prefix sum count
        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);

        // Explore left and right subtrees
        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        // Restore the state (backtracking)
        prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) - 1);

        return count;
    };

    return dfs(root, 0);
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
let root = createBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
console.log(pathSum(root, 8)); // Output: 3