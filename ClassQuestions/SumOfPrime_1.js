let isprime=(n)=>{
    for(let i=2; i*i<=n; i++){
        if(n%i==0)
        return false;
    }
    return true;
}


let printSumOfPrime=(n)=>{
    for(let i=2; i<n; i++){
        if(isprime(i) && isprime(n-i)){
        console.log(i, n-i);
        return;
        }
    }
    console.log(`sum of prime does not exist`);
    return;
}

printSumOfPrime(4);
printSumOfPrime(6);
printSumOfPrime(100);
printSumOfPrime(102);
printSumOfPrime(17);
printSumOfPrime(1);