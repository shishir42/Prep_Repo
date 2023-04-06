// const superHeros = [];
// superHeros.push('spiderman'); //Argument of type 'string' is not assignable to parameter of type 'never'

const superHeros: string[] = [];
superHeros.push('spiderman')

const heroPower: Array<number> = [];
heroPower.push(1);

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = [];
allUsers.push({name:'s', isActive:true});

