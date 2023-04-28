// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

const reveredLinkedList = (head) =>{
    let curr = head;
    let prev = null;
    while(curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val:5,
            next: null
          }
        }
      }
    }
  };

  console.log(reveredLinkedList(head));