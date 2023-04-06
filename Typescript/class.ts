class User {
    email: string   //default modifier is public
    name: string
    city: string = ""
    readonly pincode: number = 495004;
    protected _courseCount: number = 1;
    private readonly passcode: number = 1100;

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const user1 = new User('abc@gmail.com', 'abc');
user1.city = 'jaipur';


class Person {
    private _userId: string = "1234";
    protected _courseCount: number = 1;
    constructor(
        public email: string, 
        public name: string
    ){

    }

    get userId(): string{
        return this._userId;
    }

    set userId(id: string){
        this._userId = id;
    }

    //Private methods
    private deleteToken() {
        console.log('deleted token.....');
    } 
}

const per1 = new Person('s@gmail.com', 'shishir')

//inheritance

class SubUser extends User {
    isFamily : boolean = true;

    changeUserId(){
        this._courseCount = 5;
    }
}

// Interface
interface TakePhoto {
    cameraMode: string
    filter: string
    burstMode: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){

    }  
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public short: string
    ){

    }  
    createStory(): void {
        console.log('create story.....');
    }
}