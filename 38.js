// var lowestCommonAncestor = function(root, p, q) {
//     // Base case: If we reach null or find p or q
//     if (!root || root === p || root === q) {
//         return root;
//     }

//     // Recursively search for p and q in left and right subtrees
//     let left = lowestCommonAncestor(root.left, p, q);
//     let right = lowestCommonAncestor(root.right, p, q);

//     // If both sides return non-null values, this is the LCA
//     if (left && right) {
//         return root;
//     }

//     // If only one side is non-null, return the non-null node
//     return left ? left : right;
// };
var lowestCommonAncestor = function(root, p, q) {
    function dfs(node) {

        if (node === null) return null;
        if (node === p || node === q) return node;

        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left && right) return node;
        return left || right;
    }
    return dfs(root);
};
// Helper function to create a binary tree (for demonstration)
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Example binary tree: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

let p = root.left; // Node 5
let q = root.right; // Node 1

console.log(lowestCommonAncestor(root, p, q).val); // Output: 3