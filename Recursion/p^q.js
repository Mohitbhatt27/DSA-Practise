var myPow = function(x, n) {

    if(n==0) return 1;
    if(n<0){
        n = -n;
        x = 1/x
    }
    if(n%2==0){
    let result= myPow(x,(n/2));
    return result*result;
    }
    else{
        let result=myPow(x,(n-1)/2);
        return result*result*x;
    }    
};