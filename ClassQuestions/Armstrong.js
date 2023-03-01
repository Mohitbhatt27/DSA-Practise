//Find if a given number is an Armstrong number or not.
function isArmstrong(n){
    let temp=n;
    let sum=0;
    while(n!=0){
        let d=n%10;
        sum+=Math.pow(d,3);
        n=Math.floor(n/10);
    }
    if(sum==temp){
        return "Armstrong";
    }
    return "not Armstrong"
}

console.log(isArmstrong(153));
console.log(isArmstrong(371));
console.log(isArmstrong(146));
console.log(isArmstrong(-153));