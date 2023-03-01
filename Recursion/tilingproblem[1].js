function titling(n){
    if(n<=2) return n;
    return titling(n-1)+titling(n-2);
}
console.log(titling(5));