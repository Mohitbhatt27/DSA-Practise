//Quadratic equation

function Quadratic(a,b,c){
if(b*b - (4*a*c) >=0){
let root1= (-b + Math.sqrt((b*b - 4*a*c)))/(2*a);
let root2= (-b - Math.sqrt((b*b - 4*a*c)))/(2*a);
console.log(root1,root2);
}
else console.log("no real roots avaliable");
}

Quadratic(4,5,6);
Quadratic(3,2,1);
Quadratic(2,5,3);