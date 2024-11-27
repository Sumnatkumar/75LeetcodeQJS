var deleteNode = function(root, key) {
    if (!root) return null; // Base case: if root is null, return null

    // Step 1: Search for the node to delete
    if (key < root.val) {
        root.left = deleteNode(root.left, key); // Search in the left subtree
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key); // Search in the right subtree
    } else {
        // Node to be deleted is found

        // Case 1: Node has no child (leaf node) or one child
        if (!root.left) return root.right; // Return right child if left is null
        if (!root.right) return root.left; // Return left child if right is null

        // Case 2: Node has two children
        // Find the in-order successor (smallest in the right subtree)
        let successor = findMin(root.right);
        root.val = successor.val; // Copy successor's value to the current node
        root.right = deleteNode(root.right, successor.val); // Delete the successor
    }
    return root;
};

// Helper function to find the minimum value node in a subtree
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example Tree: [5, 3, 6, 2, 4, null, 7]
let root = new TreeNode(5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7))
);

console.log(deleteNode(root, 3));
// Output: [5, 4, 6, 2, null, null, 7]