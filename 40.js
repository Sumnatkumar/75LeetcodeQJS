// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Function to find the level with the maximum sum
var maxLevelSum = function(root) {
    if (!root) return 0; // Edge case: if the tree is empty

    let maxSum = -Infinity; // Initialize maxSum to a very small value
    let maxLevel = 1; // Initialize the level with max sum
    let currentLevel = 1; // Start from level 1

    const queue = [root]; // Use a queue for level-order traversal

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0; // Initialize sum for the current level

        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Dequeue the current node
            levelSum += currentNode.val; // Add the node value to levelSum

            // Enqueue child nodes
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        // Update maxSum and maxLevel if this level has a greater sum
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++; // Move to the next level
    }

    return maxLevel;
};

// Helper function to convert array to binary tree (for testing)
function arrayToTree(arr) {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift();

        // Assign left child if it's not null
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        // Assign right child if it's not null
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// Test the function
let root = arrayToTree([1, 7, 0, 7, -8, null, null]);
console.log(maxLevelSum(root)); // Expected output: 2