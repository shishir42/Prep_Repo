function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
      return null; // if either head is null, there is no intersection
    }
    
    let ptrA = headA; // pointer to traverse list A
    let ptrB = headB; // pointer to traverse list B
    
    // loop until both pointers point to the same node (intersection) or both have reached the end
    while (ptrA !== ptrB) {
      // move pointer for list A to the head of the other list if it reaches the end
      if (!ptrA) {
        ptrA = headB;
      } else {
        ptrA = ptrA.next;
      }
      
      // move pointer for list B to the head of the other list if it reaches the end
      if (!ptrB) {
        ptrB = headA;
      } else {
        ptrB = ptrB.next;
      }
    }
    
    return ptrA; // return the intersection node (or null if there is none)
  }
  

const listA = { val: 4, next: { val: 1, next: { val: 8, next: { val: 4, next: { val: 5, next: null } } } } };
const listB = { val: 5, next: { val: 0, next: { val: 1, next: { val: 8, next: { val: 4, next: { val: 5, next: null } } } } } };
const intersectionNode = getIntersectionNode(listA, listB);
console.log(intersectionNode); // outputs: { val: 8, next: { val: 4, next: { val: 5, next: null } } }
