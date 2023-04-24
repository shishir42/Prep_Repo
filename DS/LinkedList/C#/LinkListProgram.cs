namespace HelloWorld
{
    public class Node 
    {
        public int value;
        public Node next;

        public Node(int value = 0, Node next = null)
        {
            this.value = value;
            this.next = next;
        }
    }

    public class LinkListProgram
    {
        public bool IsPalindrome(Node head)
        {
            if(head == null || head.next == null)
            {
                return true;
            }

            //Step1: find the middle of linked list
            Node slow = head;
            Node fast = head;

            while(fast != null && fast.next != null)
            {
                slow = head.next;
                fast = fast.next.next;
            }

            //Step2: Reverse the second half of the linked list
            Node prev = null;
            Node curr = slow;
            while(curr != null)
            {
                Node next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            //Step3: Compare the first and second half of the linked list
            Node left = head;
            Node right = prev;

            while(right != null && left!= null)
            {
                if(left.value != right.value)
                {
                    return false;
                }

                left = left.next;
                right = right.next;
            }

            return true;
        }

        public bool IsPalindromeUsingStack(Node head)
        {
            if(head == null || head.next == null)
            {
                return true;
            }

            // Push all elements of the linked list onto a stack
            Stack<int> stack = new Stack<int>();
            Node current = head;
            while(current != null)
            {
                stack.Push(current.value);
                current = current.next;
            }

            // Pop elements from the stack and compare with the linked list in reverse order
            current = head;
            while(current != null)
            {
                if(current.value != stack.Pop())
                {
                    return false;
                }
                current = current.next;
            }

            return true;
        }

        //Merge Two Sorted List
        //Input: list1 = [1,2,4], list2 = [1,3,4]
        //Output: [1,1,2,3,4,4]

        public void MergeTwoLists(Node list1, Node list2)
        {
            Node dummy = new Node(-1);
            Node tail = dummy;

            while(list1 != null && list2 != null)
            {
                if(list1.value <= list2.value)
                {
                    tail.next = list1;
                    list1 = list1.next;
                }
                else
                {
                    tail.next = list2;
                    list2 = list2.next;
                }
                tail = tail.next;
            }

            if(list1 != null)
            {
                tail.next = list1;
            }

            if(list2 != null)
            {
                tail.next = list2;
            }

            this.TraverseList(dummy.next);
        }

        public Node? GetIntersectionNode(Node l1, Node l2)
        {
            if(l1 == null || l2 == null)
            {
                return null;
            }
            
            Node currNodeA = l1;
            Node currNodeB = l2;

            while(currNodeA != currNodeB)
            {
                currNodeA = currNodeA != null ? currNodeA.next : l2;
                currNodeB = currNodeB != null ? currNodeB.next : l1;
            }

            return currNodeA;
        }

        public Node? GetIntersectionNode_L(Node l1, Node l2)
        {
            if(l1 == null || l2 == null)
            {
                return null;
            }

            int len1 = GetLength(l1);
            int len2 = GetLength(l2);

            Node currA = l1;
            Node currB = l2;

            if(len1 > len2)
            {
                int diff = len1 - len2;
                while(diff > 0)
                {
                    currA = currA.next;
                    diff--;
                }
            }
            else
            {
                int diff = len2-len1;
                while(diff > 0)
                {
                    currB = currB.next;
                    diff--;
                }
            }

            while(currA != currB)
            {
                currA = currA.next;
                currB = currB.next;
            }

            return currA;
        }
        
        public Node? ReverseLinkedList(Node head)
        {
            if(head == null)
            {
                return null;
            }

            Node? prev = null;
            Node? curr = head;

            while(curr != null)
            {
                Node next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            return prev;
        }

        public Node ReverseLinkedListRecursive(Node head)
        {
            if(head == null || head.next == null)
            {
                return head;
            }

            Node reversed = ReverseLinkedListRecursive(head.next);
            head.next.next = head;
            head.next = null;

            return reversed;
        }

        

        private void TraverseList(Node head)
        {
            Node current = head;
            while(current != null)
            {
                Console.WriteLine(" " + current.value);
                if(current != null)
                {
                    Console.Write(" -> ");
                }
                current = current.next;
            }
            Console.WriteLine();
        }

        private int GetLength(Node head)
        {
            int length = 0;
            Node curr = head;
            while(curr != null)
            {
                length++;
                curr = curr.next;
            }

            return length;
        } 

        public void Driver()
        {
            // Node head = new Node(1);
            // head.next = new Node(2);
            // head.next.next = new Node(3);
            // head.next.next.next = new Node(2);
            // head.next.next.next.next = new Node(1);
            
            Node node1 = new Node(1, null);
            Node node2 = new Node(2, node1);
            Node node3 = new Node(3, node2);
            Node node4 = new Node(2, node3);
            Node node5 = new Node(1, node4);
            Node head = node5;

            // Linked List;Two Pointers;Stack;Recursion
            var linkedListProgram = new LinkListProgram();
            bool isPalindrome = linkedListProgram.IsPalindrome(head);
            Console.WriteLine("isPalindrome*********** Time Complexity: O(N) Space Complexity: O(1) " + isPalindrome);

            isPalindrome = linkedListProgram.IsPalindromeUsingStack(head);
            Console.WriteLine("isPalindrome*********** Time Complexity: O(N) Space Complexity: O(N) " + isPalindrome);

            Node n11 = new Node(1, null);
            Node n22 = new Node(2, n11);
            Node n33 = new Node(4, n22);
            Node l1 = n33;

            Node m11 = new Node(1, null);
            Node m22 = new Node(3, m11);
            Node m33 = new Node(4, m22);
            Node l2 = m33;

            linkedListProgram.MergeTwoLists(n33, m33);

            Console.WriteLine("***************************");
            Node common = new Node(8);
            common.next = new Node(4);
            common.next.next = new Node(5);

            Node headA = new Node(4);
            headA.next = new Node(1);
            headA.next.next = common;

            Node headB = new Node(5);
            headB.next = new Node(0);
            headB.next.next = new Node(1);
            headB.next.next.next = common;

            Node? intersection = linkedListProgram.GetIntersectionNode_L(headA, headB);
            if (intersection == null) 
            {
                Console.WriteLine("The two linked lists do not intersect.");
            } else 
            {
                Console.WriteLine("The intersection point is: " + intersection.value);
            }

            Console.WriteLine("***************************");
            Node head1 = new Node(1);
            head1.next = new Node(2);
            head1.next.next = new Node(3);
            head1.next.next.next = new Node(4);
            head1.next.next.next.next = new Node(5);
            // Node reversedNodeIte = linkedListProgram.ReverseLinkedList(head1);
            // linkedListProgram.TraverseList(reversedNodeIte);

            Node reversedNodeRecurrsion = linkedListProgram.ReverseLinkedListRecursive(head1);
            linkedListProgram.TraverseList(reversedNodeRecurrsion);
        }
    }    
}