const factorial = (n) => {
    let answer = 1;
    if(n === 0 || n === 1){
        return answer;
    }else if(n > 1){
        for (let i = n; i >=1; i--) {
            answer = answer * i
        }

        return answer;
    }else{
        return "number has to be positive";
    }
}

const factorialRec =(n) =>{
    if(n < 0){
        return "number has to be positive."
    }
    
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

console.log(factorial(5));