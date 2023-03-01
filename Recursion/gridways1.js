function ways(i,j,m,n){
    if(i>m-1||j>n-1) {
        return 0;
    }
    if(i==m-1 && j==n-1){
        return 1;
    }
    let right= ways(i,j+1,m,n);
    let down= ways(i+1,j,m,n);
    return right+down;
}

console.log(ways(0,0,3,3));