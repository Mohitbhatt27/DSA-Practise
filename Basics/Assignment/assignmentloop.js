/*
"Write a javascript program to print below pattern having numbers in pyramid form along with its
mirror image"
*/

function pyramid(n) {
    for(let i=1; i<=n; i++) {
    let str = "";
    for(let j=1; j<=n-i; j++) {
    str += " ";
    }
    for(let j=1; j<=i; j++) {
    str += j;
    }
    for(let j=i-1; j>=1; j--) {
    str += j;
    }
    console.log(str);
    }
    }
    
    pyramid(5);
    