function providedId(id: string | null){
    if(!id){
        console.log("please provide value");
        return;
    }

    id.toLowerCase();
}

//in Operator

//discriminated union 
interface Circle{
    kind: "circle"
}

interface Square{
    kind: "square"
}

