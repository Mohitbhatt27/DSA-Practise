//Given a number n, calculate n!

function fact(num){

    let result=1;

    if(num==0){
        return result;
    }

    while(num>1){
        result*=num;
        num--;
    }

    return result;
}

for(let i=0; i<=20; i++){
    console.log(`Factorial of ${i} = ${fact(i)}`)
}