function square(num : number) {
     return num * num ;
}

square(3);
// square("asd"); 
//square(true);

const dosomething = (person : string, age :number ) => {

}

dosomething("name ", 5);


//function retrun type

function squares ( num: number) : number{
   return num * num ;
}


//anoonymus function

const colors = ["red", "blue", "yellow"];

colors.map(color => {
 // return color.toFixed() 
})

// void type

function dname(msg:string):void {

    console.log(msg);

    
}

//never

function makeError (msg :string) : never {
    throw new Error (msg);
}

function gameloop() : never {
    while (true) {
        console.log(" im still going");
    }
}