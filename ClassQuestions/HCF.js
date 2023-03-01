//Find the HCF of a and b

// function hcf(a,b){
//     let hcf=1;
//     let min= (a<=b)? a:b;
//     for(let i=2; i<=min; i++){
//         if(a%i==0 && b%i==0){
//             hcf=i;
//         }
//     }
//     console.log(hcf);
// }
// hcf(24,28);


// //Euclidian algorithm

//  function gcd(a, b) {
//     if (b == 0) {
//         return a;
//     }
// return gcd(b, a % b);
// }
// console.log(gcd(126,123));



function EuclidHcf(a,b){

    //Make sure a>b, so pass (b,a) to the fuction if needed
    if(b>a){
        return EuclidHcf(b,a);
    }

    let r=a%b;
    //if remainder is zero, b is the answer
    if(r==0){
        return (b);
    }
    /*otherwise we will calculate GCD again with r and b, 
    as a,r,and b have same GCD*/

    else{
        return(EuclidHcf(r,b));
    }
}
console.log(EuclidHcf(3003,55));



//hcf*lcm=a*b

// function lcm(a,b){
//     console.log((a*b)/gcd(a,b));
// }
// lcm(1267,8928);






//hcf*lcm=a*b
//lcm=a*b/hcf(n);


