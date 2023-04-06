// Input: head = [1,1,2]
// Output: [1,2]


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// To solve this problem, we can iterate through the linked list while keeping track of the 
// previous node and the current node. If the current node's value is equal to the previous node's value, 
// then we delete the current node by updating the previous node's next pointer to skip the current node. 
// Otherwise, we simply move on to the next node.
// After deleting the duplicates, we return the head of the sorted linked list. 
// Since the linked list is already sorted, we don't need to perform any additional sorting.

const deleteDuplicates = (head) => {
    let prev = null;
    let curr = head;

    while(curr != null){
        if(prev != null && prev.value === curr.value){
            prev.next = curr.next;
        }else{
            prev = curr;
        }
        curr = curr.next;
    }

    return head;
}

// Definition for singly-linked list
function ListNode(val) {
    this.value = val;
    this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(4);

const traverse = function(head){
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr;
}

console.log(traverse(deleteDuplicates(head)));