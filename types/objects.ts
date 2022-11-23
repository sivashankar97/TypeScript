function printName (person : { first :string}) {
 
}

printName ({first : "thomast"});




let coordinate  : { x :number , y : number} = {x :34 , y :2};

function makerandom() : {
    x : number , y : number
} {
    return { x : Math.random(), y : Math.random()}
}

//type allias

type point = {
    x : number ;
    y : number;

};

function double ( point : point) : Point {
    return {
        x : point.x * 2 , y : point.y * 2 
    }
}