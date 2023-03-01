/* given the sides length of a triangle in the form of 3 integers, c
*/

let a=2, b=4, c=4;
if(a==b & b==c){
    console.log("Equilaterial");
}
else if(a!=b && a!=c && b!=c){
    console.log("Scalene");
}
else console.log("isoceles");
