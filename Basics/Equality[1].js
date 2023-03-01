/*==, ===, !===, !==
misconception: that == does not check the type and just compares the value. It's not like that. 

== is an Abstract Equality Comparison, it first checks the type of both operand, if Type(x) == Type(y),
then the whole thing is transfered to === which is a Strict Equality comaparison. 

if the types are not same in ==, it does coercion
*/
console.log(null==undefined); //true
console.log(null===undefined); //false
console.log("50"==50);
console.log(null==false) 
//null only gives true with null or undefined
console.log(typeof ("42"));

console.log([] == []);
console.log([]==false);

//== is truthy, but while comparing it to false, 
//coercion takes place and [] is converted to string and string of it is "", which is falsy.

console.log( Array.prototype.toString("[]"), "mohit");

/*
if ( [] == false ) {
     // this code runs }

if ( [] ) {
    // this code also runs }

if ([] == true) {
    // this code doesn't run }

if ( ![] ) {
  // this code also doesn't run } 
*/