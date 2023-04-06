const factTrailingZero = (n) =>{
    let numZeros = 0;
    for(let i = 5; i <=n; i*= 5){
        // numZeros += Math.floor(n/i);
        numZeros = numZeros + Math.floor(n/i);
    }

    return numZeros;
}

//(n / 5) + (n / 5^2) + (n / 5^3)... (n / 5^x)

console.log(factTrailingZero(10))