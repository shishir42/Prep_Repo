// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummyHead.next;
}


let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// Call addTwoNumbers function
let sum = addTwoNumbers(l1, l2);

// Print output linked list
while (sum) {
    console.log(sum.val);
    sum = sum.next;
}

// In this example, l1 represents the number 342 and 
// l2 represents the number 465.
// The expected output is the linked list 7 -> 0 -> 8, which represents the sum 807 in reverse order.


let ll1 = new ListNode(9);
ll1.next = new ListNode(9);
ll1.next.next = new ListNode(9);
ll1.next.next.next = new ListNode(9);
ll1.next.next.next.next = new ListNode(9);
ll1.next.next.next.next.next = new ListNode(9);
ll1.next.next.next.next.next.next = new ListNode(9);

let ll2 = new ListNode(9);
ll2.next = new ListNode(9);
ll2.next.next = new ListNode(9);
ll2.next.next.next = new ListNode(9);


// Call addTwoNumbers function
let sum1 = addTwoNumbers(ll1, ll2);

// Print output linked list
while (sum1 !== null) {
    console.log(sum1.val);
    sum1 = sum1.next;
}