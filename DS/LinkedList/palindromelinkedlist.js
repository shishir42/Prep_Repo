// Topics: Linked List;Two Pointers;Stack;Recursion : Easy

//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

function ListNode(val, next) {
     this.value = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

// class ListNode {
//     constructor(val = 0, next = null) {
//       this.value = val;
//       this.next = next;
//     }
//   }

var traverse = function(head){ 
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    console.log(arr);
}


var isPalindrome = function(head) {
    //find the middle of list
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the list
    let prev=null, curr = slow;
    while(curr){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // compare the first half with the reversed second half
    while(prev){
        if (prev.val !== head.val) {
            return false;
          }
          prev = prev.next;
          head = head.next;
    }

    return true;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2, node1);
const node3 = new ListNode(2, node2);
const node4 = new ListNode(1, node3);
const head = node4;

console.log(isPalindrome(head));


//reverse linked list
// https://www.geeksforgeeks.org/reverse-a-linked-list/