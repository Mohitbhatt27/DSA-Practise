/*
Hoisting allows functions to be safely used in code before they are declared.
It allows the declaration of functions, variables or classes to the top of their scope, 
prior to execution of the code.
*/

catName("Tiger");
function catName(name) {
  console.log(`My cat's name is ${name}`);
}

//hoisting can not be done with let
//with var, variable hoisting is possible but if we will only be able to access it
//the result on accessing it will be undefined and not the one who initialised while declaration below

/*
console.log(x);
let x=5; throws an error
*/

console.log(x); //prints undefined and not 5
var x=5; 

//function hoisting example

greet();
function greet(){
    console.log("hi");
}

greet1("Hola");
function greet1(a){
    console.log(`${a} Mohit`);
}