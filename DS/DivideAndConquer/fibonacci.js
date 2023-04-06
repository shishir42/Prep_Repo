const fibonacci = (n) =>{
    if(n < 1){
        return 'error';
    }else if (n === 1){
        return 1;
    }else if (n === 2){
        return 2;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(6));

// 0 1 1 2 3 5 8 13