const randomInteger = (min, max) =>{
    return Math.floor(Math.random() * (max-min+1)) + min;
}

console.log(randomInteger(1,10));
console.log(randomInteger(1,100));