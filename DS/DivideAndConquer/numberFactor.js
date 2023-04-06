// n: 4
// O/p: {4}, {1,3}, {3,1}, {1,1,1,1}

const numberOfWays = (n) =>{
    if(n === 0 || n ===1 || n===2){
        return 1;
    }

    if(n === 3){
        return 2;
    }

    let sub1 = numberOfWays(n-1);
    let sub3 = numberOfWays(n-3);
    let sub4 = numberOfWays(n-4);

    return sub1 + sub3 + sub4;
}

console.log(numberOfWays(4));