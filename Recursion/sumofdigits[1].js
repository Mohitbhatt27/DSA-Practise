function sumofdigits(n){
    if(n==0) return 0;
    return n%10+sumofdigits(Math.floor(n/10));
}
console.log(sumofdigits(123456));