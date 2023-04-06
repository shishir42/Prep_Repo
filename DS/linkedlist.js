class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    traverse() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    insert(value, index) {
        if (index < 0 && index > this.size) {
            throw new Error("Index out of range");
        }

        const node = new Node(value);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            if (!this.tail) {
                this.tail = node;
            }
        } else if (index === this.size) {
            this.add(value);
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    length() {
        return this.size;
    }

    remove() {
        //remove from head
        if (!this.head) {
            return null;
        }

        const value = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;

        return value;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    search(value) {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }


}

const list = new LinkedList();
list.insert(1, 0);
list.add(2);
list.add(3);
list.add(4);
console.log(list.traverse());
list.remove();
console.log(list.traverse());
list.removeAt(2);
console.log(list.traverse());

//  Problems List
//  https://leetcode.com/problems/palindrome-linked-list/
//  https://leetcode.com/problems/merge-two-sorted-lists/
//  https://leetcode.com/problems/reverse-linked-list/
//  https://leetcode.com/problems/design-hashmap/
//  https://leetcode.com/problems/intersection-of-two-linked-lists/
//  https://leetcode.com/problems/middle-of-the-linked-list/
//  https://leetcode.com/problems/linked-list-cycle/
//  https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//  https://leetcode.com/problems/remove-linked-list-elements/
//  https://leetcode.com/problems/add-two-numbers/
//  https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//  https://leetcode.com/problems/reorder-list/
//  https://leetcode.com/problems/design-circular-queue/
//  https://leetcode.com/problems/copy-list-with-random-pointer/
//  https://leetcode.com/problems/reverse-linked-list-ii/
//  https://leetcode.com/problems/swap-nodes-in-pairs/
//  https://leetcode.com/problems/odd-even-linked-list/
//  https://leetcode.com/problems/sort-list/
//  https://leetcode.com/problems/design-browser-history/
//  https://leetcode.com/problems/add-two-numbers-ii/
//  https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
//  https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
//  https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
//  https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
//  https://leetcode.com/problems/split-linked-list-in-parts/
//  https://leetcode.com/problems/linked-list-random-node/
//  https://leetcode.com/problems/design-twitter/
//  https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
//  https://leetcode.com/problems/merge-k-sorted-lists/
//  https://leetcode.com/problems/lfu-cache/
//  https://leetcode.com/problems/reverse-nodes-in-k-group/
//  https://leetcode.com/problems/all-oone-data-structure/
//  https://leetcode.com/problems/lru-cache/


// Linked lists are used in various applications, including:
// Implementing data structures such as stacks, queues, and hash tables.
// Managing dynamic memory allocation. Linked lists provide a way to allocate memory on the heap at runtime and then release it when it's no longer needed.
// Representing sparse matrices. In a sparse matrix, most of the elements are zero, so it's more efficient to store only the non-zero elements and their positions using a linked list.
// Building graphs and trees. Linked lists can be used to represent edges between nodes in a graph or to represent child-parent relationships in a tree.
// Implementing file systems. The file system of an operating system uses a linked list to keep track of the files on disk.
// Text editors. Text editors use a linked list to keep track of the text being edited, with each character stored in a node.
// Music players. Linked lists can be used to create playlists where each song is stored in a node.
// Simulation and modeling. Linked lists are useful in simulations and modeling, where new elements can be added or removed from a list without the need to move or reallocate other elements.
// Implementing AI algorithms. Some AI algorithms, such as neural networks, use linked lists to store and process data.
// These are just a few examples of the many applications of linked lists.