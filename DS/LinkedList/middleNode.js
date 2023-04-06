// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const middleNode = (head) =>{
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Definition for singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create the first linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

console.log(middleNode(head));


// The function uses the two-pointer approach to find the middle node of the linked list. The slow pointer moves one step at a time while the fast pointer moves two steps at a time. When the fast pointer reaches the end of the list, the slow pointer will be pointing at the middle node.

// If there are two middle nodes, the function will return the second middle node because the slow pointer will be pointing at the second middle node when the fast pointer reaches the end of the list.