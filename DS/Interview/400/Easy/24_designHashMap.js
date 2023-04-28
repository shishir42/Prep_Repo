
// Design HashMap
// Topics: Array;Hash Table;Linked List;Design;Hash Function

var MyHashMap = function() {
    this.data = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.data[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.data[key] !== undefined ? this.data[key] : -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.data[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const map = new MyHashMap();
map.put(1, 'value1');
map.put(2, 'value2');
map.put(3, 'value3');

console.log(map.get(1)); // output: "value1"
console.log(map.get(4)); // output: -1

map.remove(2);
console.log(map.get(2)); // output: -1


function HashMap() {
    const data = {};
  
    function put(key, value) {
      data[key] = value;
    }
  
    function get(key) {
      return data[key];
    }
  
    function remove(key) {
      delete data[key];
    }
  
    function containsKey(key) {
      return key in data;
    }
  
    function containsValue(value) {
      for (let key in data) {
        if (data[key] === value) {
          return true;
        }
      }
      return false;
    }
  
    function size() {
      return Object.keys(data).length;
    }
  
    function isEmpty() {
      return size() === 0;
    }
  
    function clear() {
      for (let key in data) {
        delete data[key];
      }
    }
  
    function keys() {
      return Object.keys(data);
    }
  
    function values() {
      return Object.values(data);
    }
  
    return {
      put,
      get,
      remove,
      containsKey,
      containsValue,
      size,
      isEmpty,
      clear,
      keys,
      values,
    };
  }
  