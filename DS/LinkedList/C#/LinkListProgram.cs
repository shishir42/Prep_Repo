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

        public Node MiddleNode(Node head)
        {
           Node slow = head;
           Node fast = head;

           while(fast != null && fast.next != null)
           {
                slow = slow.next;
                fast = fast.next.next;
           }

           return slow;
        }

        public bool HasCylce(Node head)
        {
            if(head == null || head.next == null)
            {
                return false;
            }

            Node slow = head;
            Node fast = head.next;

            while(slow != fast)
            {
                if(fast == null && fast.next == null)
                {
                    return false;
                }

                slow = slow.next;
                fast = fast.next.next;
            }

            return true;
        }

        public void DeleteDuplicates(Node head)
        {
            Node currentNode = head;

            while(currentNode != null && currentNode.next != null)
            {
                if(currentNode.value == currentNode.next.value)
                {
                    currentNode.next = currentNode.next.next;
                }
                else
                {
                    currentNode = currentNode.next;
                }
            }
        }

        public Node RemoveLinkedListElement(Node head, int val)
        {
            while(head != null && head.value == val)
            {
                head = head.next;
            }

            Node currentNode = head;
            while(currentNode != null && currentNode.next != null)
            {
                if(currentNode.value == currentNode.next.value)
                {
                    currentNode.next = currentNode.next.next;
                }
                else
                {
                    currentNode = currentNode.next;
                }
            }

            return currentNode;
        }

        public Node AddTwoNumber(Node l1, Node l2)
        {
            Node dummy = new Node();
            Node current = dummy;
            int carry = 0;
            while(l1 != null || l2 != null || carry !=0)
            {
                int sum = carry;
                if(l1 != null)
                {
                    sum += l1.value;
                    l1 = l1.next;
                }

                if(l2 != null)
                {
                    sum += l2.value;
                    l2 = l2.next;
                }

                carry = sum/10;
                current.next = new Node(sum % 10);
                current = current.next;
            }

            return dummy.next;
        }

        public Node RemoveNthFromEnd_1(Node head, int n)
        {
            int len = 0;
            Node curr = head;
            while(curr != null)
            {
                len++;
                curr = curr.next;
            }

            // B > length, then we can't remove node
            if(n > len)
            {
                Console.Write("Length of the linked list is " + len);
                Console.Write(" we can't remove " + n + 
                           "th node from the");
                Console.Write(" linked list\n");
                return head;
            }
            else if(n == len)
            {
                return head.next;
            }
            else
            {
                int diff = len - n;
                Node prev = null;
                Node current = head;

                for(int i=0; i< diff; i++)
                {
                    prev = current;
                    current = current.next;
                }

                prev.next = current.next;
                return head;
            }
        }

        public Node RemoveNthFromEnd_2(Node head, int n)
        {
            // Define two pointers, slow and fast, both pointing to the head of the linked list
            Node slow = head;
            Node fast = head;

            for(int i=0;i<n;i++)
            {
                fast = fast.next;   
            }

            if(fast == null)
            {
                return head.next;
            }

            while(fast.next != null)
            {
                slow = slow.next;
                fast = fast.next;
            }

            slow.next = slow.next.next;

            return head;
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

             Console.WriteLine("***************************");
             Node head_new = new Node(1);
             head_new.next = new Node(2);
             head_new.next.next = new Node(3);
             head_new.next.next.next = new Node(4);
             head_new.next.next.next.next = new Node(5);
             Node middle = this.MiddleNode(head_new);
             Console.WriteLine("Middle Node "+ middle.value);

             Console.WriteLine("***************************");
             // Create a linked list with a cycle
             Node head_new1 = new Node(1);
             Node node2_new1 = new Node(2);
             Node node3_new1 = new Node(3);
             Node node4_new1 = new Node(4);

             head_new1.next = node2_new1;
             node2_new1.next = node3_new1;
             node3_new1.next = node4_new1;
             node4_new1.next = node2_new1; // creates the cycle

             Console.WriteLine("Has cycle "+ linkedListProgram.HasCylce(head_new1));
             
             Console.WriteLine("***************************");
             Node n1 = new Node(2, new Node(4, new Node(3)));
             Node n2 = new Node(5, new Node(6, new Node(4)));

             Node result =  linkedListProgram.AddTwoNumber(n1, n2);
             linkedListProgram.TraverseList(result);
              //  2 -> 4 -> 3
              //  5 -> 6 -> 4
              //  7 -> 0 -> 8

             Console.WriteLine("***************************");
             Node n_1 = new Node(1);
             n_1.next = new Node(2);
             n_1.next.next = new Node(3);
             n_1.next.next.next = new Node(4);
             n_1.next.next.next.next = new Node(5);

             int n = 2;
             Node res =  linkedListProgram.RemoveNthFromEnd_1(n_1, n);
             TraverseList(res);

             Node res1 =  linkedListProgram.RemoveNthFromEnd_2(n_1, n);
             TraverseList(res1);
        }
    }    
}