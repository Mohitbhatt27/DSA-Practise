//Check if a number is prime or not

function isprime(num){
    for(let i=2; i*i<=num; i++){
        if(num%i==0){
        return false;
        }
    }
    return true;
}

console.log(isprime(7));
console.log(isprime(10));
console.log(isprime(97));
