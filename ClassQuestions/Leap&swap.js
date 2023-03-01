//to check if an year is leap or not

let year=1700;
if(year % 4 ==0 && (year % 400 ==0) || (year % 100 !=0)){
    console.log("leap");
}
else console.log("not leap");
    
//
let a=10;
if((a&1)==0){
    console.log("even");
}
else console.log("odd");


/*
10&1
1010 & 0001
0000

9&1
1001 & 0001
0001
*/


//swap using third variable
let g=10;
let h=11;
let swap;
swap=g;
g=h;
h=swap;
console.log(g,h);

//swap without using third variable
let m=15;
let n=18;
m=m+n;
n=m-n;
m=m-n;
console.log(m,n);