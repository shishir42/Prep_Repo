// Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

function Node(val, next){
    this.val = val;
    this.next = next;
}

const deleteDuplicates =(head)=>{
    if(!head || !head.next){
        return head;
    }

    let curr = head;
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }

    return head;
}

const head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);

const newHead = deleteDuplicates(head);

console.log(newHead); // ListNode { val: 1, next: ListNode { val: 2, next: null } }
