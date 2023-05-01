// Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

const memorizeAddition = () =>{
    let cache = {};
    return (value) =>{
        if(value in cache){
            console.log('fetching from cache');
            return cache[value];
        }else{
            console.log('calculating result');
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    };
}

const addition = memorizeAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached

// Memoization is a technique used in computer science to optimize the performance of functions by caching the results of function calls and returning the cached result when the same inputs occur again. This can help reduce the number of times a function is called and improve the overall performance of the application.


function expensiveCalculation(n) {
    console.log('Calculating...');
    return n * 10;
  }
  
  const memoizedCalculation = (function() {
    const cache = {};
  
    return function(n) {
      if (n in cache) {
        console.log('Retrieving from cache...');
        return cache[n];
      } else {
        const result = expensiveCalculation(n);
        cache[n] = result;
        return result;
      }
    };
  })();
  
  console.log(memoizedCalculation(5)); // Output: Calculating...50
  console.log(memoizedCalculation(5)); // Output: Retrieving from cache...50

  
//   In this example, expensiveCalculation is a function that takes a number as input and performs a costly operation (multiplying the number by 10). We want to optimize this function using memoization so that the result is cached and retrieved from cache if the function is called again with the same input.

// To do this, we create a new function called memoizedCalculation that wraps the original expensiveCalculation function. memoizedCalculation creates a cache object that stores the results of previous function calls. When memoizedCalculation is called with a number input, it first checks the cache object to see if the result for that input is already stored. If it is, the function returns the cached result. If not, the function calls expensiveCalculation to calculate the result, stores the result in the cache, and returns the result.

// When we call memoizedCalculation(5) the first time, the function performs the calculation and logs "Calculating...50" to the console. When we call the function again with the same input, the function retrieves the result from the cache and logs "Retrieving from cache...50" to the console.

// In summary, memoization is a technique used to optimize the performance of functions by caching the results of function calls and returning the cached result when the same inputs occur again.

//https://www.youtube.com/watch?v=O7n9w_f9u9A&list=PLmcRO0ZwQv4QMslGJQg7N8AzaHkC5pJ4t&index=28