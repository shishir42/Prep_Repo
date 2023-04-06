const score: Array<number> = [];
const names: Array<string> = [];

function identityOne<Type>(val:Type):Type{
    return val;
}

identityOne<number>(3);

identityOne(11);
identityOne(true);

function identityTwo<T>(val: T): T{
    return val;
}

interface Bottle{
    brand: string,
    type: string
}

identityTwo<Bottle>({brand: 'hrx', type:'aa'});


function getSearchProduct<T>(products: T[]): T {
    return products[3];
}

//Arrow function 
const getMoreSearchProduct = <T>(products: T[]):T => {
    return products[3];
}

const getMoreSearchProduct1 = <T,>(products: T[]):T => {
    return products[3];
}

function anotherFunction<T,U>(val1: T,val2: U extends number): object {
    return {val1, val2}
}

anotherFunction('shishir', 3)

//Generic Class

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name:string,
    subject: string,
    author: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
}
