let score: number | string | boolean = 33;

function getDBId(id: number | string){
    console.log(`Db id is: ${id}`);
}

getDBId(2);
getDBId("2");

function getSome(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }else {
        id = id + 3;
    }
}

const data: string[] | number[] = [1, 2, 3, 4]
const data1: string[] | number[] = ["1", "2", "3", "4"]
const data2: (string | number)[] = [1, 2, 3, "4", "5"]
const data3: any[] = [1, 2, "3", true]

let seatAllotment : "aisle" | "middle" | "window"


