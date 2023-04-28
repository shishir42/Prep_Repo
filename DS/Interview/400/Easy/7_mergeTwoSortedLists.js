// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Topics: Array;Two Pointers;Sorting

function Node(val, next){
    this.val = val;
    this.next = next || null;
}

var mergeTwoSortedList = function(list1, list2){
    const dummy = new Node(0);
    let tail = dummy;

    while(list1 && list2){
        if(list1.val < list2.val){
            tail.next = list1;
            list1 = list1.next;
        }else{
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if(list1){
        tail.next = list1;
    }

    if(list2){
        tail.next = list2;
    }

    return dummy.next;
}