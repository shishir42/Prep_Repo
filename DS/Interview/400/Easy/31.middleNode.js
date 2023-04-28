// Middle of the Linked List
// Topics: Linked List;Two Pointers

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

const findMiddleNode = (head) =>{
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(findMiddleNode(list1)); // Output: { val: 3, next: { val: 4, next: { val: 5, next: null } } }

const list2 = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(findMiddleNode(list2)); // Output: { val: 3, next: { val: 4, next: null } }
