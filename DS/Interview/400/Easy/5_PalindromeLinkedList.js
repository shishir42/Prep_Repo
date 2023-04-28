// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

// Topics: Linked List;Two Pointers;Stack;Recursion

function Node(val, next){
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

//Using slow and fast pointers
const isPalindrome = (head) =>{
    // Find the middle point of the linked list
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Compare the values of the first and second halves of the linked list
    let p1 = head;
    let p2 = prev;

    while(p2){
        if(p1.val !== p2.val){
            return false;
        }

        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
}

// Create a linked list: 1 -> 2 -> 2 -> 1
const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null
        }
      }
    }
  };
  
  // Check if the linked list is a palindrome
  console.log(isPalindrome(head)); // true
  

  function isPalindromeUsingStack(head) {
    let stack = [];
    let curr = head;
  
    // Traverse the linked list and push each node's value onto the stack
    while (curr !== null) {
      stack.push(curr.val);
      curr = curr.next;
    }
  
    // Traverse the linked list again and compare each node's value with the top element of the stack
    curr = head;
    while (curr !== null) {
      if (curr.val !== stack.pop()) {
        return false;
      }
      curr = curr.next;
    }
  
    return true;
  }
  

  const head1 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null
          }
        }
      }
    }
  };
  
  console.log(isPalindromeUsingStack(head1)); // true