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

// Main function to calculate maximum depth
var maxDepth = function(root) {
    // if (!root) return 0; // Base case: If the tree is empty, depth is 0
    if (root === null) return 0;

    let left = maxDepth(root.left); // Recursive call for the left subtree
    let right = maxDepth(root.right); // Recursive call for the right subtree

    return Math.max(left, right) + 1; // Maximum depth is max of left/right + 1 (for current node)
};

// Testing the function
let root = createBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root)); // Output: 3