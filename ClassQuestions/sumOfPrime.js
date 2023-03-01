/*
Given a number A which is an even integer, you need to print two prime numbers whose sum will be 
equal to A.
Constraint: A>2
Input - 4
Output - 2,2
*/

let prime=(num)=>{
    if(num==1){
        return false;
    }
    for(let i=2; i*i<=num; i++){
        if(num%i==0)
        return false;
    }
    return true;
}

let SumOfPrime=(A)=>{
for(let i=2; i<=A; i++){
    if(prime(i) && prime(A-i)){
        console.log(i, A-i);
        return;
    }
}
console.log(`no pair found`);
}

SumOfPrime(10);
SumOfPrime(15);
SumOfPrime(63);
SumOfPrime(26);