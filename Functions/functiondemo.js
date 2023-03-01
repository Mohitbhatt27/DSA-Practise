function isEven(num){
    if(num%2==0){
        return true;
    }
    return false;
}

for(let i=1; i<=50; i++){
    console.log(i,"is",isEven(i));
}