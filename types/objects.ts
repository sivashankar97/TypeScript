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

//nested object
//  const description = (perosn : { name : string ; age :number ; parents : {
//     mom : string;
//     dad : string;
//  }}) => {

//     return `perosn : ${name},
//     AGe : ${age}, parents: ${parents.mom}`
//  }
 

//interscetion type

type circle = {
    radius : number ;
};

type colorfull = {
    color : string;
};

type colorfullcircke = circle & colorfull ;


const  happyface : colorfullcircke {
    // radius : 3 ,
    color : yellow,
}