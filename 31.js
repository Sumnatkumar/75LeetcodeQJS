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

// Helper function to convert a linked list back to an array
function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// Reverse Linked List Function
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

// Testing the function
let head = createLinkedList([1, 2, 3, 4, 5]);
let reversedHead = reverseList(head);
console.log(linkedListToArray(reversedHead)); // Output: [5, 4, 3, 2, 1]