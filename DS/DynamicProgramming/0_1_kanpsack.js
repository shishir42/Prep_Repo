// recursive function 

const knapsack = (wtarr, valarr, capacity) =>{

}

// code snippet

// int knapsack(int wt[], int val[], int W, int n)
// {
//     //base condition 
//     if(n==0 || W==0){
//         return 0;
//     }

//     // Choice
//     if(wt[n-1] <= W){
//         return max((val[n-1] + knapsack(wt, val, W-wt[n-1], n-1)), knapsack(wt, val, W, n-1));
//     }else if (wt[n-1] > W){
//         return knapsack(wt, val, W, n-1);
//     }
// }

//Recursive to Memorize 

//1. Identity the attribute change in above recursive called like (W, N)
//2. create an matrix of size [N+1][W+1]
//3. Initialize -1 in the 2d matrix 
//4. Every recursion called check that has value or not 
//5. if value is present then return the same value 
//6. if value is not present then get the value of result from recursive call

//int t[102][1002]; //check the constraint
//fill the above array with -1 

// int knapsack(int wt[], int val[], int W, int n)
// {
//     //base condition 
//     if(n==0 || W==0){
//         return 0;
//     }

    // if(t[n][W] != -1){
    //     return t[n][W];
    // }


//     // Choice
//     if(wt[n-1] <= W){
        //   t[n][W] =  max((val[n-1] + knapsack(wt, val, W-wt[n-1], n-1)), knapsack(wt, val, W, n-1));
//         return t[n][W];
//     }else if (wt[n-1] > W){
//         t[n][W] =  knapsack(wt, val, W, n-1);
            // return t[n][W];
//     }
// }

function knapsackRecursion(weights, values, capacity, n){
    //base case
    if(n === 0 || capacity === 0) {
        return 0;
    }

    if(weights[n-1] <= capacity){
        return Math.max(values[n-1] + knapsackRecursion(weights, values, capacity-weights[n-1], n-1), 
        knapsackRecursion(weights, values, capacity, n-1));
    }else if(weights[n-1] > capacity){
        return knapsackRecursion(weights, values, capacity, n-1);
    }
}

// Time Complexity: O(2N)
// Auxiliary Space: O(N), Stack space required for recursion

// function knapsackRecursion(weights, values, capacity, n){
//     //base case
//     if(n === 0 || capacity === 0) {
//         return 0;
//     }

//     if(weights[n-1] > capacity){
//         return knapsackRecursion(weights, values, capacity, n-1);
//     }
    
//     const include = values[n - 1] + knapsackRecursion(weights, values, capacity - weights[n - 1], n - 1);
//     const exclude = knapsackRecursion(weights, values, capacity, n - 1);
    
//     return Math.max(include, exclude);
// }


const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
const n = values.length;
console.log(knapsackRecursion(weights, values, capacity, n));
console.log('*************************');

function knapsackRecursionMemorize(weights, values, capacity, n, dp){
    //base case
    if(n === 0 || capacity === 0) {
        return 0;
    }

    dp = dp || {};

    const memoKey = `${capacity}-${n}`;
    if (dp[memoKey]) {
        return dp[memoKey];
    }

    if(weights[n-1] <= capacity){
        dp[n,capacity] =  Math.max(values[n-1] + knapsackRecursionMemorize(weights, values, capacity-weights[n-1], n-1, dp), 
        knapsackRecursionMemorize(weights, values, capacity, n-1, dp));

        return dp[n,capacity];
    }else if(weights[n-1] > capacity){
        dp[n,capacity] = knapsackRecursionMemorize(weights, values, capacity, n-1, dp);
        return dp[n,capacity];
    }
}

console.log(knapsackRecursionMemorize(weights, values, capacity, n));

// Top down approach 
function knapsack_TopDown(capacity, weights, values, n) {
    let dp = new Array(n+1);
    for (let i = 0; i <= n; i++) {
      dp[i] = new Array(capacity+1).fill(0);
    }
  
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i-1] <= w) {
          dp[i][w] = Math.max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w]);
        } else {
          dp[i][w] = dp[i-1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
  
  console.log("Maximum value that can be obtained: " + knapsack_TopDown(capacity, weights, values, n));
  
  console.log('*************************');
  //Subset sum problem

  const subsetSum = (sets, sum) =>{
    const n = sets.length;
    let dp = new Array(n+1);
    for(let i=0; i<=n; i++){
        dp[i] = new Array(sum+1).fill(false);
        dp[i][0]= true;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=sum; j++){
            if(sets[i-1] <= j){
                dp[i][j] = dp[i-1][j-sets[i-1]] || dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[n][sum];
  }

  console.log('subsetSum ' + subsetSum([3, 1, 7, 5], 10)); //return true or false


  console.log('*************************');
  //Equal Sum partition problem 

  const equalSumPartition = (arr) =>{
    let sum = arr.reduce((a, b) => a + b, 0);

    if(sum % 2 !== 0){
        return false;
    }else if(sum % 2 === 0){
        return subsetSum(arr, sum/2);
    }

    return false;
  }

  const arr = [1, 5, 11, 5, 3, 1];
    //   output: True/False
    // [1,5,5] === [11] //Equal partition
  console.log(equalSumPartition(arr));

  console.log('*************************');
  //Count of Subsets Sum with a Given Sum

   const items = [2, 3, 5, 8, 10];
   const sum = 10;
   //   output: No of subset 
   // {2, 8}, {2, 3, 5}, {10}
   // Count: 3

   const countSubsetsWithSum = (sets, targetSum) =>{
    const n = sets.length;
    let dp = new Array(n+1);
    for(let i=0; i<=n; i++){
        dp[i] = new Array(targetSum+1).fill(0);
        dp[i][0]= 1;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=targetSum; j++){
            if(sets[i-1] <= j){
                dp[i][j] = dp[i-1][j-sets[i-1]] + dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[n][targetSum];
   }

   const arr1 = [2,3,5,6,8,10];
   const targetSum = 10;
  console.log(countSubsetsWithSum(arr1, targetSum));

  console.log('*************************');
  //Minimum Subset Sum Difference
   // Partition P1 -> s1
   // Partition P2 -> s2
   //Output -> abs(s1-s2) = min. here is 1.
   // arr = [1, 6, 11, 5]
   // {1,6} and {11, 5} => (11+5) - (1+6) => 9
   // {1, 6, 5} and {11} => 12-11 =>1
   // Range - 2(S1) = minimize 

   const minSubsetSumDiff = (arr) =>{
    const n = arr.length;
    let sum = arr.reduce((a, b) => a + b, 0);
    let dp = new Array(n+1);
    for(let i=0; i<=n; i++){
        dp[i] = new Array(sum+1).fill(false);
        dp[i][0]= true;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=sum; j++){
            if(arr[i-1] <= j){
                dp[i][j] = dp[i-1][j-arr[i-1]] || dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    let diff = Number.MAX_VALUE;
    for(let i=0; i< sum+1; i++){
        diff = Math.min(diff, Math.abs(sum - 2*i));
    }

    return diff;
   }

   console.log(minSubsetSumDiff([1, 6, 11, 5]));

console.log('*************************');   
//Count the number of subset with a given difference

// arr[]: [1, 1, 2, 3]
// DIff: 1
// O/p: 3 (Count the subset which has diff of 1)
// eg: {1,3} and {1,2}
// {1, 3} and {1, 2} because 1 is repeated
// {1, 1, 2} and {3}
// S1 - S2 = diff --------1
// S1 + S2 = sum  --------2  
// formula: S1  = (diff + sum)/2
// then apply countSubsetsWithSum(arr, S1);

const countTheNumberOfSubsetWithDiff = (arr, diff) =>{
    const totalSum = arr.reduce((a, b) => a + b, 0);
    const sum = (diff+totalSum)/2;
    return countSubsetsWithSum(arr, sum);
}

console.log(countTheNumberOfSubsetWithDiff([1, 1, 2, 3], 1));

console.log('*************************');   
//Total sum
// arr[]: [1, 1, 2, 3]
// sum: 1
// +1 -1 -2 +3 ---> 1
// -1 +1 -2 +3 ---> 1
// +1 +1 +2 -3 ---> 1
// O/p: 3

const targetSumProblem = (arr, target) => {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    if((totalSum < Math.abs(target)) || (target+totalSum)%2!= 0) return 0;

    const newTarget = (totalSum - target)/2;
    return countSubsetsWithSum(arr, newTarget);
}

console.log(targetSumProblem([1, 1, 2, 3], 1));
console.log(targetSumProblem([1, 1, 1, 1, 1], 3));

