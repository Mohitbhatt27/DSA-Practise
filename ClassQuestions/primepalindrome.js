/*
Problem 2 :
Create a program to print all prime palindromes under 50.
*/


//function to check for prime number
let prime = (num) =>{
    for(i=2; i*i<=num; i++){
        if(num%i==0)
        return false;
    }
    return true;
}


//function to check for palindrome
let palindrome = (num)=>{
    let reverse=0;
    let numcopy=num;
    while(num>0){
        let remainder=num%10;
        reverse=reverse*10+remainder;
        num=Math.floor(num/10);
    }
    if(numcopy===reverse)
    return true;
    return false;
}


//1 is neither prime nor composite

for(let i=2; i<50; i++){
    if(prime(i) && palindrome(i))
    console.log(i);
}

