function ListNode(val, next) {
    this.value = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const reverse = (head) =>{
    let prev=null, curr = head;
    while(curr){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    head = prev
    return head;
}

var traverse = function(head){ 
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    console.log(arr);
}

const node1 = new ListNode(4);
const node2 = new ListNode(3, node1);
const node3 = new ListNode(2, node2);
const node4 = new ListNode(1, node3);
const head = node4;

traverse(reverse(head));