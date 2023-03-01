let number=8;
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

if(number>=0)
console.log(0);
if(number>=1)
console.log(1);
a=0,b=1;
for(let i=2; i<=number; i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c 
}