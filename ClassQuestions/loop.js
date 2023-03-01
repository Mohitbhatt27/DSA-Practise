//printing number from 1 to 10
let i=1;
while(i<=10){
    console.log(i++);
}

console.log("....................................");
//using for loop
for (let i=1; i<=10; i++){
    console.log(i);
}

console.log("....................................");

//using do while loop
var j=1;
do{
    console.log(j++);
}
while(j<=10);

console.log("....................................");
//sum of 1 to 10
let n=1, sum=0;
while(n<=10){
    sum+=n;
    n++;
}
console.log(sum);

console.log("....................................");
//print the numbers from 20 to 1

let m=20;
while(m>=1){
    console.log(m--);
}

console.log("....................................");

for(k=1; k<=10; k++)
console.log(k);

console.log("....................................");
//Wap to print all even numbers 

for(let z=2; z<25; z+=2){
console.log(z);
}


console.log("....................................");
//Wap to check a number x is prime or not
let x=11; var flag=0;
for(var l=2; l*l<=x; l++){
    if(x%l==0){
    console.log("not prime");
    flag++;
    break;
}
}
if(flag==0){
console.log("prime");
}