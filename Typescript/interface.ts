interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    startTrail: () => string
    startTrail1(): string
    getCoupon(couponName: string): number
}

//reopening of interface
interface User {
    googleId: number
}

interface Emp {
    name: string
}

interface Admin extends User, Emp{
    role: string
}

const user1 : User = {
    email: 'abc@gmail.com', userId: 111, dbId: 1111, googleId: 133,
    startTrail: function (): string {
        return 'abc';
    },
    startTrail1: function (): string {
        return 'abc';
    },
    getCoupon: function (couponName: string): number {
        return 1234;
    }
}

const user2 : Admin = {
    role: "",
    dbId: 0,
    email: "",
    userId: 0,
    startTrail: function (): string {
        throw new Error("Function not implemented.")
    },
    startTrail1: function (): string {
        throw new Error("Function not implemented.")
    },
    getCoupon: function (couponName: string): number {
        throw new Error("Function not implemented.")
    },
    googleId: 0,
    name: ""
}

