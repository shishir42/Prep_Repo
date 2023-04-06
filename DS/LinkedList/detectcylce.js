// To detect a loop in a linked list using JavaScript, 
// you can use the "Floyd's cycle-finding algorithm", also known as the "tortoise and hare algorithm". 
// The idea behind this algorithm is to use two pointers, 
// one that moves at a slower pace (the "tortoise") and one that moves at a faster pace (the "hare"), 
// to traverse the linked list. If there is a loop in the linked list, 
// the hare pointer will eventually catch up to the tortoise pointer.

// In this implementation, head is the head node of the linked list. 
// The tortoise and hare pointers are initialized to head. 
// The while loop iterates through the linked list as long as the hare pointer is not null and 
// its next node is not null. In each iteration of the loop, the tortoise pointer moves one step 
// forward and the hare pointer moves two steps forward. 
// If the hare pointer catches up to the tortoise pointer at any point, 
// it means there is a loop in the linked list and the function returns true. 
// If the hare pointer reaches the end of the linked list without catching up to the tortoise pointer, 
// it means there is no loop and the function returns false.

const hasLoop = (head) =>{
    let slow = head;
    let fast = head;

    while(slow !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }

    return false;
} 

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

// create nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// link nodes together
node1.next = node2;
node2.next = node3;
node3.next = node4;
// create a loop in the linked list by connecting the last node to the second node
node4.next = node2;

console.log(hasLoop(node1)); // true