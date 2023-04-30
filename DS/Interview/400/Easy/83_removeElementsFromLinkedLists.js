function removeElements(head, val) {
    while (head != null && head.val === val) {
      head = head.next;
    }
    let current = head;
    while (current != null && current.next != null) {
      if (current.next.val === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }

  
  class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next || null;
    }
  }
  
  // create a linked list with values [1, 2, 6, 3, 4, 5, 6]
  const head = new ListNode(1, 
    new ListNode(2, 
      new ListNode(6, 
        new ListNode(3, 
          new ListNode(4, 
            new ListNode(5, 
              new ListNode(6)))))));
  
  const val = 6;
  
  // call the removeElements function with the linked list and the value to remove
  const newHead = removeElements(head, val);
  
  // print the resulting linked list
  let current = newHead;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
  