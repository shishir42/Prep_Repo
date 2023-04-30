/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    
    // Add all the elements in list1 to the map
    for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], i);
    }
    
    let minIndexSum = Number.MAX_SAFE_INTEGER;
    const result = [];
    
    // Check if each element in list2 is in the map, and update the minimum index sum accordingly
    for (let i = 0; i < list2.length; i++) {
      if (map.has(list2[i])) {
        const indexSum = map.get(list2[i]) + i;
        if (indexSum < minIndexSum) {
          minIndexSum = indexSum;
          result.length = 0;
          result.push(list2[i]);
        } else if (indexSum === minIndexSum) {
          result.push(list2[i]);
        }
      }
    }
    
    return result;
  };
  
const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];

console.log(findRestaurant(list1, list2)); // Output: ["Shogun"]

