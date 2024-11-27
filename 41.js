// var searchBST = function(root, val) {
//     // Base case: if the root is null or the value is found
//     if (!root || root.val === val) {
//         return root;
//     }

//     // If the target value is smaller, search in the left subtree
//     if (val < root.val) {
//         return searchBST(root.left, val);
//     }

//     // If the target value is larger, search in the right subtree
//     return searchBST(root.right, val);
// };
var searchBST = function(root, val) {
    while (root !== null) {
        if (root.val === val) {
            return root; // Found the value
        } else if (val < root.val) {
            root = root.left; // Go to the left subtree
        } else {
            root = root.right; // Go to the right subtree
        }
    }
    return null; // Value not found
};


function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example Tree: [4, 2, 7, 1, 3]
let root = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7)
);

console.log(searchBST(root, 2)); // Output: TreeNode { val: 2, left: TreeNode { val: 1 }, right: TreeNode { val: 3 } }
console.log(searchBST(root, 5)); // Output: null