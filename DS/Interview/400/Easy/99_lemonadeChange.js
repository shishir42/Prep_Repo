// For example, if the input array is [5, 5, 5, 10, 20], the function should return true, because you can provide change to every customer. The first three customers pay with $5 bills and you can give change using the $5 bills you have on hand. The fourth customer pays with a $10 bill and you can give change using a $5 bill. The fifth customer pays with a $20 bill and you can give change using a $10 bill and a $5 bill.

const lemonadeChange = (bills) =>{
    let fiveCount = 0;
    let tenCount = 0;

    for(let i=0; i<bills.length; i++){
        if (bills[i] === 5) {
            fiveCount++;
          } else if (bills[i] === 10) {
            if (fiveCount === 0) {
              return false;
            }
            fiveCount--;
            tenCount++;
          } else if (bills[i] === 20) {
            if (tenCount > 0 && fiveCount > 0) {
              tenCount--;
              fiveCount--;
            } else if (fiveCount >= 3) {
              fiveCount -= 3;
            } else {
              return false;
            }
          }
        }
        
        return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])); // Output: true
