function fractionalKnapsack(capacity, weights, values) {
    const n = values.length;
    let ratio = Array(n);
  
    for (let i = 0; i < n; i++) {
      ratio[i] = {
        index: i,
        value: values[i] / weights[i]
      };
    }
  
    // sort items by value-to-weight ratio in descending order
    ratio.sort((a, b) => b.value - a.value);
  
    let maxProfit = 0;
  
    for (let i = 0; i < n; i++) {
      const idx = ratio[i].index;
      const wt = weights[idx];
      const val = values[idx];
  
      if (capacity >= wt) {
        // take the whole item and add its value to the profit
        capacity -= wt;
        maxProfit += val;
      } else {
        // take a fraction of the item and add its value to the profit
        const fraction = capacity / wt;
        maxProfit += fraction * val;
        break;
      }
    }
  
    return maxProfit;
  }
  
  let capacity = 50;
    let weights = [10, 20, 30];
    let values = [60, 100, 120];
  console.log(fractionalKnapsack(capacity, weights, values))

  //https://www.scaler.com/topics/fractional-knapsack-problem/