// https://www.youtube.com/watch?v=8qi8a2ph71o

//steps
// Traverse both linked lists and calculate their lengths.
// If the lengths of the linked lists are not equal, then move the longer list's head pointer ahead by the difference of the lengths.
// Now, iterate through both the linked lists in parallel until we find a common node.
// Return that node if it exists, else return null.

const getIntersectionNode = (headA, headB) => {
    // Step 1: Calculate the lengths of the linked lists
    let lenA = 0, lenB = 0;
    let currA = headA, currB = headB;

    while (currA) {
        lenA++;
        currA = currA.next;
    }

    while (currB) {
        lenB++;
        currB = currB.next;
    }

    // Step 2: Move the head pointer of the longer list ahead by the difference in lengths
    let diff = Math.abs(lenA - lenB);
    currA = headA;
    currB = headB;

    if (lenA > lenB) {
        while (diff-- > 0) {
            currA = currA.next;
        }
    } else {
        while (diff-- > 0) {
            currB = currB.next;
        }
    }

    // Step 3: Iterate through both linked lists in parallel until we find a common node
    while (currA !== null && currB !== null) {
        if (currA === currB) {
            // Step 4: Return the common node if it exists
            return currA;
        }

        currA = currA.next;
        currB = currB.next;
    }

    // Step 4: Return null if there is no intersection
    return null;
}

// Definition for singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create the first linked list: 1 -> 2 -> 3 -> 4 -> 5
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);

//time complexity is O(m+n).
//space complexity is O(1).

// Create the second linked list: 6 -> 7 -> 4 -> 5
let headB = new ListNode(6);
headB.next = new ListNode(7);
headB.next.next = headA.next.next.next;

// Call the getIntersectionNode() function to find the intersection node
let intersectionNode = getIntersectionNode(headA, headB);

// Print the intersection node's value
if (intersectionNode === null) {
  console.log("The two linked lists do not intersect.");
} else {
  console.log("The two linked lists intersect at node with value " + intersectionNode.val);
}

const getIntersectionNode_N = (headA, headB) =>{
    let currA = headA;
    let currB = headB;

    while(currA !== currB){
        currA = currA !== null ? currA.next : headB;
        currB = currB !== null ? currB.next : headA;
    }

    return currA;
}

// Call the getIntersectionNode() function to find the intersection node
let intersectionNode_N= getIntersectionNode_N(headA, headB);

// Print the intersection node's value
if (intersectionNode_N === null) {
  console.log("The two linked lists do not intersect.");
} else {
  console.log("The two linked lists intersect at node with value " + intersectionNode_N.val);
}