console.log(undefined+"Mohit");
console.log(undefined-"Mohit");
console.log(null+10);
console.log(null-10);
console.log(100-"number");
console.log(true+10);
console.log(true-10);
console.log(true+"Mohit");
console.log(true-"Mohit");
console.log(true-false);
console.log(true+undefined);
console.log("true"+undefined);
//console.log(Symbol("1")+1);
console.log([1,2,3]+undefined);
console.log([null]+"Mohit");
console.log([null,undefined]+"Mohit"); //Array of [null,undefined] gets converted in a ,]
console.log([[],[]]+"Mohit"); //Nested empty Array gets converted to a comma as well
console.log([[1],[2]]+"Mohit"); //Otherwise nested array wgets converted to a string
console.log(1-null); //null to a number is zero
console.log(1-undefined); //undefined to a number is NaN

/*
Falsy value and truthy value: false, 0, -0, 0n, "", null, undefined, and NaN. 
Rest all are truthy values
*/

console.log(!undefined); //returns true
console.log(1+!NaN); //NaN is a falsy value, so it's not gives true, 1+true is 2
console.log((5<8)&&(!null)); //returns true as both are true
console.log((5<8) && !Symbol("Array")); //everything other than symbol is a truthy value so not of symbol is false