function addNum(num:number): number{
    return num + 2;
}

console.log(addNum(2));

let loginUser = (name: string, email: string, isPaid: boolean = false) =>{

}

loginUser('sa', 'shishir@gmail.com', false);

function getValue(myVal: number) {
    if(myVal > 5){
        return true;
    }

    return "Status OK"
}

function handleError(errMsg: string): never{
    throw new Error(errMsg);
}