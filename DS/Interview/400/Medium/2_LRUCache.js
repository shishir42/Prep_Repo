class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
    }
}
var obj = new LRUCache(2)
obj.put("1", 100);
var param_1 = obj.get("1")
console.log(param_1);


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCacheNode{
    constructor(capacity){
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.cache = {};
        this.size = 0;
    }

    get(key) {
        if (this.cache[key]) {
          const { value } = this.cache[key];
          this._moveToHead(this.cache[key]);
          return value;
        }
        return -1;
      }
    
      put(key, value) {
        if (this.cache[key]) {
          this.cache[key].value = value;
          this._moveToHead(this.cache[key]);
        } else {
          const newNode = new Node(key, value);
          this.cache[key] = newNode;
          this._addToHead(newNode);
          this.size++;
    
          if (this.size > this.capacity) {
            const removedNode = this._removeTail();
            delete this.cache[removedNode.key];
            this.size--;
          }
        }
      }

    _addToHead(node){
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            //doubly linked list 
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    _removeNode(node){
        if(node.prev){
            node.prev.next = node.next;
        }else{
            this.head = node.next;
        }

        if(node.next){
            node.next.prev = node.prev;
        }else{
            this.tail = node.prev;
        }
    }

    _removeTail(){
        const removedNode = this.tail;
        this._removeNode(removedNode);
        return removedNode;
    }

    _moveToHead(node){
        this._removeNode(node);
        this._addToHead(node);
    }
}

const lruCache = new LRUCacheNode(3);

lruCache.put("key1", "value1");
lruCache.put("key2", "value2");
lruCache.put("key3", "value3");

console.log(lruCache.get("key1")); // Output: "value1"
console.log(lruCache.get("key2")); // Output: "value2"
console.log(lruCache.get("key3")); // Output: "value3"

lruCache.put("key4", "value4");

console.log(lruCache.get("key1")); // Output: null
console.log(lruCache.get("key2")); // Output: "value2"
console.log(lruCache.get("key3")); // Output: "value3"
console.log(lruCache.get("key4")); // Output: "value4"
