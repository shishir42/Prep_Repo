const User = {
    name:'shishir',
    email: 'shishir@gmail.com',
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

createUser({name:'shishir', isPaid:false});

function createCourse():{}{
    return {};
}

function createCourse1():{name: string, isPaid: boolean}{
    return {name:'React', isPaid:true};
}