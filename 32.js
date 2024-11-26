// var pairSum = function(head) {
//     let total = 0;
//     let node = head;

//     // Calculate the length of the linked list
//     while (node) {
//         total++;
//         node = node.next;
//     }

//     // Store the values in an array for easier access to twins
//     let values = [];
//     node = head;
//     while (node) {
//         values.push(node.val);
//         node = node.next;
//     }

//     // Calculate the maximum twin sum
//     let maxSum = -Infinity;
//     for (let i = 0; i < total / 2; i++) {
//         maxSum = Math.max(maxSum, values[i] + values[total - 1 - i]);
//     }

//     return maxSum;
// };
var pairSum = function(head) {
    // Step 1: Find the middle of the linked list using slow and fast pointers
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let current = slow;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Step 3: Calculate twin sums and find the maximum
    let maxSum = 0;
    let firstHalf = head;
    let secondHalf = prev; // Head of the reversed second half

    while (secondHalf) {
        maxSum = Math.max(maxSum, firstHalf.val + secondHalf.val);
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return maxSum;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = { val: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = { val: arr[i], next: null };
        current = current.next;
    }
    return head;
}

// Testing the function
let head = createLinkedList([5, 4, 2, 1]);
console.log(pairSum(head)); // Output: 6