// Function to convert an array to a binary tree
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

// Definition for a binary tree node
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// Original function
// var rightSideView = function(root) {
//     if (!root) return []; // Handle the empty tree case

//     const result = []; // To store the rightmost nodes
//     const queue = [root]; // Initialize the queue with the root node

//     while (queue.length > 0) {
//         let levelSize = queue.length;
//         let rightmostNode = null;

//         // Traverse all nodes at the current level
//         for (let i = 0; i < levelSize; i++) {
//             const current = queue.shift(); // Dequeue the current node
//             rightmostNode = current.val; // Update the rightmost node value for this level

//             // Add child nodes to the queue
//             if (current.left) queue.push(current.left);
//             if (current.right) queue.push(current.right);
//         }

//         result.push(rightmostNode); // Add the last (rightmost) node of this level to the result
//     }

//     return result;
// };
var rightSideView = function(root) {

    if (root === null) return [];

    let res = [];
    let queue = [root];

    while (queue.length) {
        let level = [];
        let levelSize = queue.length;
        while (levelSize) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);

            level.push(current.val);
            levelSize--;
        }
        res.push(level[level.length - 1]);
    }
    return res;
};

// Test input
let root = arrayToTree([1, null, 3]); // Convert the array to a tree
console.log(rightSideView(root)); // Expected output: [1, 3]