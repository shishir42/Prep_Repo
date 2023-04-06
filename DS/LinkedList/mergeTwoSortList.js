// Difficulty: Easy
// Topics: Linked List;Recursion

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing 
// together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

function mergeSortedLists(list1, list2) {
    let mergedList = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            mergedList.push(list1[i]);
            i++;
        } else {
            mergedList.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        mergedList.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        mergedList.push(list2[j]);
        j++;
    }

    return mergedList;
}

// function ListNode(val, next) {
//     this.value = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

function ListNode(data, next) {
    this.value = data;
    this.next = next;
  } 

const mergeSortedLists_LinkedList = (l1, l2) => {
    let dummy = new ListNode(-1);
    let curr = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1 !== null) {
        curr.next = l1;
    }

    if (l2 !== null) {
        curr.next = l2;
    }

    return dummy.next;
}

console.log(mergeSortedLists([5, 7], [4, 6]));

const node1 = new ListNode(7, null);
const node2 = new ListNode(5, node1);

const node3 = new ListNode(6, null);
const node4 = new ListNode(4, node3);

const l1 = node2;
const l2 = node4;


var n3 = new ListNode(10, null);
var n2 = new ListNode(3, n3);
var n1 = new ListNode(1, n2);
var L1 = n1; 

var n6 = new ListNode(9, null);
var n5 = new ListNode(6, n6);
var n4 = new ListNode(5, n5);
var L2 = n4;


const traverse = function (head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr;
}

console.log(traverse(mergeSortedLists_LinkedList(L1, L2)));