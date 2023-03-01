/*
Given a positive number you need to write a program to find the sum of the inner digits of that 
number.
Input - 2124
Output - 3

*/

let SumOfInnerDigits=(num)=>{

    //checking if it has at least 3 digits
    if(num%100==num){
        return -1;
    }

    let sum=0;
    num=Math.floor(num/10);
    while(Math.floor(num/10)>0){
        sum+=num%10;
        num=Math.floor(num/10);
    }

    return sum;
}

console.log(SumOfInnerDigits(18));
console.log(SumOfInnerDigits(180));
console.log(SumOfInnerDigits(1867));
console.log(SumOfInnerDigits(9786));
console.log(SumOfInnerDigits(9999));
