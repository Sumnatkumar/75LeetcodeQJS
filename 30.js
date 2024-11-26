var oddEvenList = function(head) {
    if (!head || !head.next) return head; // Handle edge cases (0 or 1 node)

    let odd = head;
    let even = head.next;
    let evenHead = even; // Save the head of the even list

    while (even && even.next) {
        odd.next = even.next; // Link current odd to the next odd
        odd = odd.next; // Move odd pointer

        even.next = odd.next; // Link current even to the next even
        even = even.next; // Move even pointer
    }

    odd.next = evenHead; // Connect the end of the odd list to the even list
    return head;
};
console.log(oddEvenList([1, 2, 3, 4, 5]));