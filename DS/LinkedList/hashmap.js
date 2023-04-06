// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map:
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

// Input
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
// [null, null, null, 1, -1, null, 1, null, -1]

// Explanation
// MyHashMap myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
// myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

var MyHashMap = function () {
    this.map = {};
};

MyHashMap.prototype.put = function (key, value) {
    this.map[key] = value;
};
MyHashMap.prototype.get = function (key) {
    return this.map[key] !== undefined ? this.map[key] : -1;
};
MyHashMap.prototype.remove = function (key) {
    delete this.map[key];
};

// Your MyHashMap object will be instantiated and called as such:
const myHashMap = new MyHashMap();
myHashMap.put(1, 1);
console.log(myHashMap.map);
myHashMap.put(2, 2);
console.log(myHashMap.map);
myHashMap.get(1);
myHashMap.get(3);
myHashMap.put(2, 1);
console.log(myHashMap.map);
myHashMap.get(2);
myHashMap.remove(2);
console.log(myHashMap.map);
myHashMap.get(2);
console.log(myHashMap.map);

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class Hashmap {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    put(key, value) {
        const node = new Node(key, value);
        if (!this.head) {
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    get(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }

            current = current.next;
        }

        return -1;
    }

    remove(key) {
        if (!this.head) {
            return;
        }

        if (this.head.key === key) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
}

