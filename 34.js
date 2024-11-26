var leafSimilar = function(root1, root2) {
    // Function to collect the leaf nodes of a tree
    const getLeafSequence = (node) => {
        let leaves = [];
        const dfs = (current) => {
            if (!current) return; // Base case: if the node is null, return

            if (!current.left && !current.right) { // If it's a leaf node
                leaves.push(current.val);
            }

            // Recursively traverse the left and right subtrees
            dfs(current.left);
            dfs(current.right);
        };
        dfs(node);
        return leaves; // Return the collected leaf sequence
    };

    // Get the leaf sequences for both trees
    const leafSequence1 = getLeafSequence(root1);
    const leafSequence2 = getLeafSequence(root2);

    // Compare the two sequences
    return leafSequence1.length === leafSequence2.length &&
        leafSequence1.every((val, index) => val === leafSequence2[index]);
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
let root1 = createBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
let root2 = createBinaryTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);
console.log(leafSimilar(root1, root2)); // Output: true