// var goodNodes = function(root) {
//     // Helper function for DFS traversal
//     const dfs = (node, maxSoFar) => {
//         if (!node) return 0; // Base case: if node is null, return 0

//         // Count this node if it's a "good" node
//         let count = 0;
//         if (node.val >= maxSoFar) {
//             count = 1; // It's a good node
//             maxSoFar = node.val; // Update the max value along this path
//         }

//         // Traverse the left and right subtrees
//         count += dfs(node.left, maxSoFar);
//         count += dfs(node.right, maxSoFar);

//         return count;
//     };

//     // Start the DFS traversal from the root with initial max value as root's value
//     return dfs(root, root.val);
// };
// Helper function to create a binary tree from an array
var goodNodes = function(root) {
    let count = 0;
    let max = root.val;

    function dfs(root, max) {
        if (root === null) return;
        if (root.val >= max) {
            max = Math.max(max, root.val);
            count++;
        }
        dfs(root.left, max);
        dfs(root.right, max);
    }
    dfs(root, max);
    return count;
};

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
let root = createBinaryTree([3, 1, 4, 3, null, 1, 5]);
console.log(goodNodes(root)); // Output: 4