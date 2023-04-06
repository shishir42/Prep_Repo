type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User{
    return {name:'s', email:'sss', isActive: true}
}

createUser({name:'s', email:'sss', isActive: true});

type User1 = {
    readonly _id: string, //Mark this property as readOnly 
    name: string,
    email: string,
    isActive: boolean,
    cardDetails?: number //Optional 
}

type cardDate = {
    cardDate: string
}

type cardNumber = {
    cardNumber: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}