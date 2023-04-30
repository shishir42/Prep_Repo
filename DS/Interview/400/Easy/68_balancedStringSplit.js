// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

const balancedStringSplit = (s) =>{
    let count = 0;
    let balance = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === "L"){
            balance++;
        }else if(s[i] === "R"){
            balance--;
        }
        if(balance === 0){
            count++;
        }
    }

    return count;
}

console.log(balancedStringSplit('RLRRLLRLRL'));