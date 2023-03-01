function power(a,n){
    let ans=1;
    while(n>=0){
        ans*=a;
        n--;
    }
    return ans;
}
console.log(power(3,11));