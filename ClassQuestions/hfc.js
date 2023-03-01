/*let a=4,b=2, ans=1;
function hfc(n){
for(let i=2; i<=n; i++){
    if(a%i==0 && b%i==0){
        ans=i;
    }
}
return ans;
}
console.log(hfc(Math.min(a,b)));*/

/* 
optimised solution of gcd comes from Euclid's algorithm
if we divide 2 numbers a and b, then a=b*q+r where r is the remainder and q is the quotient
a=19, b=7, then 19=7*2+5; when q=2, r=5;

let's say gcd of a and b is g, then g is the largest number which completely divides a and b
that means a%g=b%g=0
now we have a=bq+r
a-bq=r
bq will also be divisible by g, since b and a both are divisble by g
bq is a multiple of b
that means whole a-bq is divisible by g
and a-bq is divisble by g
this implies r is also divisble by g
and we know that r is going to be lesser than a and b
so we may say gcd(a,b)=gcd(b,a%b) where a%b is the remainder
this is euclid algorithm
*/


let a=4,b=2;
if(b>a){   //we always need a>b
    //swap
    temp=a;
    a=b;
    b=temp;
}

while(b!=0){
    let remainder=a%b;
    a=b;
    b=remainder;  
}
console.log("gcd of two numbers is",a); //the moment b becomes zero, a is our gcd