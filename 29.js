// Helper function to create a linked list from an array
// function createLinkedList(arr) {
//     if (arr.length === 0) return null;
//     let head = { val: arr[0], next: null };
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//         current.next = { val: arr[i], next: null };
//         current = current.next;
//     }
//     return head;
// }

// // Helper function to convert a linked list back to an array
// function linkedListToArray(head) {
//     let arr = [];
//     let current = head;
//     while (current !== null) {
//         arr.push(current.val);
//         current = current.next;
//     }
//     return arr;
// }

// // The main function to delete the middle node
// var deleteMiddle = function(head) {
//     // Edge case: If the list has only one node
//     if (head.next === null) {
//         return null;
//     }

//     // Calculate the length of the list
//     let length = 0;
//     let current = head;
//     while (current !== null) {
//         length++;
//         current = current.next;
//     }

//     // Find the position of the middle node (0-indexed)
//     let middle = Math.floor(length / 2);

//     // Traverse again to the node just before the middle node
//     current = head;
//     for (let i = 0; i < middle - 1; i++) {
//         current = current.next;
//     }

//     // Remove the middle node by updating the link
//     current.next = current.next.next;

//     return head;
// };
var deleteMiddle = function(head) {
    let slow = fast = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!prev) return null;
    prev.next = slow.next;
    return head;
};


// Testing the function
let head = createLinkedList([1, 3, 4, 7, 1, 2, 6]);
let newHead = deleteMiddle(head);
console.log(linkedListToArray(newHead)); // Output: [1, 3, 4, 1, 2, 6]