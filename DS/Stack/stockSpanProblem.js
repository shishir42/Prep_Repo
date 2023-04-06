//https://leetcode.com/problems/online-stock-span/

//consecutive smaller or equal (before it)
// Input = [100, 80, 60, 70, 60, 75, 85]
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]

// Explanation
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // return 1
// stockSpanner.next(80);  // return 1
// stockSpanner.next(60);  // return 1
// stockSpanner.next(70);  // return 2
// stockSpanner.next(60);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// stockSpanner.next(85);  // return 6

//Nearest Greatest Left - NGL (index)


//Nearest Greatest Right
//Nearest Smallest Right
//Nearest Smallest Right 

const stockSpanProblem = (nums) => {
    const stack = [];
    const nextGreater = [];
    const n = nums.length;
    let nearGreatestElementMap = {};

    for(let i=0; i<n; i++){
        if(stack.length === 0){
            nextGreater.push(-1);
        }else if(stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) > nums[i]){
            nextGreater.push(parseInt(Object.values(stack[stack.length - 1])[0]));
        }else if(stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) <= nums[i]){
            while(stack.length > 0 && parseInt(Object.keys(stack[stack.length - 1])[0]) <= nums[i]){
                stack.pop();
            }

            if(stack.length === 0){
                nextGreater.push(-1);
            }else{
                nextGreater.push(parseInt(Object.values(stack[stack.length - 1])[0]));
            }
        }

        nearGreatestElementMap = {}
        nearGreatestElementMap[nums[i]] = i;
        stack.push(nearGreatestElementMap);
    }
    console.log(nextGreater.join('-->'));
    for(let i=0; i< nextGreater.length; i++){
        nextGreater[i] = i - nextGreater[i];
    }

    return nextGreater;
}

console.log(stockSpanProblem([100, 80, 60, 70, 60, 75, 85]));


function calculateStockSpan(prices) {
    const n = prices.length;
    const stack = [0];
    const spans = [1];

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        spans[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }

    return spans;
}

console.log(calculateStockSpan([100, 80, 60, 70, 60, 75, 85]));
