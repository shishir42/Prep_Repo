// Linked List Cycle
// Topics: Hash Table;Linked List;Two Pointers

const hasCycle = (head) => {
    // Initialize two pointers, slow and fast
    let slow = head;
    let fast = head;

    // Traverse the linked list using slow and fast pointers
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }

    return false;
}

// Create a linked list with a cycle
const head = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: {
          val: -4,
          next: null,
        },
      },
    },
  };
  head.next.next.next.next = head.next;
  
  console.log(hasCycle(head)); // Output: true
  
  // Create a linked list without a cycle
  const head2 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  };
  
  console.log(hasCycle(head2)); // Output: false
  