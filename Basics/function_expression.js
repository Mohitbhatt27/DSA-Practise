//first keyword is not function
/*
let element=function(){

}
*/

let greet=function(name){       //anonymous function expression
    console.log("hello", name); 
}
greet("mohit");



let welcome=function hi(name) ////named function epression
{
    console.log("hello",name);
}
welcome("mohit");

/*
1. Named fuction expression makes more readable code
2. It makes code easily debuggable
*/

/* Function declaration gets attached to global scope if not inside any other function
   Function expression gets attached to scope of variables they are assigned to */
