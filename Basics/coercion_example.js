//implicit conversions to string
console.log("3"+0);
console.log("3"+null);
console.log(0+"3"+0);
//if one of the operand is string, implicit conversion takes place

//implicit conversion to number
console.log("3"-0);
console.log("3"-null);
console.log(0-"3"-0);
console.log("3"-undefined);
//undefined is converted to NaN, and null is converted to 0

//non numeric string to NaN conversion
console.log("Sanket"-"Singh"); //NaN
console.log("3"-[]); //Not NaN as empty array is converted to ""

//boolean conversion to number
console.log(10-true); //9
console.log(10+!10); //10 is truthy, !10=false, =0, so 10 is the output   
console.log(10+!NaN); //NaN is falsy, so 10+1=11
console.log(10+![]); //[] is truthy, so 10+0=10
console.log("10"+![]); //one of them is a string so ![]=false is concatenated
console.log("10"-![]);//minus implicitly converts both to number, so 10-not true=10

//Explicit conversions
console.log(Number(!true));
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(String("")); //empty
console.log(String([])); //also empty as it's converted to "";