/**
 * Given a number n, you can perform one of these 3 operations:
 * if n is divisble by 2, then divide by 2
 * if n is divisble by 3, then divide by 3
 * if n is greater than 1, then minus 1
 * What are the minimum number of operations that one can do to reach from n to 1
 */

function minSteps(n){
    if(n==1) return 0;
    if(n==2) return 1;
    if(n==3) return 1;

    let x=(n%2==0)?minSteps(n/2):Infinity;
    let y=(n%3==0)?minSteps(n/3):Infinity;
    let z=minSteps(n-1);

    return 1+Math.min(x,y,z);
}
console.log(minSteps(17));