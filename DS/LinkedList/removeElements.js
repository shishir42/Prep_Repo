// Given the head of a linked list and an integer val, 
// remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Input: head = [], val = 1
// Output: []

// Input: head = [7,7,7,7], val = 7
// Output: []

const removeElements = (head, val) => {
    // Handle edge case of empty linked list
    if (!head) {
        return null;
    }

    // Remove any leading nodes with the given value
    while (head && head.value === val) {
        head = head.next;
    }

    let prev = head;
    let curr = head ? head.next : null;

    // Iterate through the rest of the linked list
    while (curr) {
        if (curr.value === val) {
            // Skip the current node
            prev.next = curr.next;
        } else {
            // Move on to the next node
            prev = curr;
        }
        curr = curr.next;
    }

    return head;
}

// Definition for singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create the first linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(7);
head.next = new ListNode(7);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(7);
head.next.next.next.next = new ListNode(7);

console.log(removeElements(head, 7));