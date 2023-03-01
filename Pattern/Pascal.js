/*

n=6

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1


*/

function pattern(n){
    let a=1, b=1;
    if(n==1){
        console.log("1");
        return;
    }
    else if (n>=2){
        console.log("1");
        console.log("1 1");
    }

    for(let i=3; i<=n; i++){
        let str="1"+" ";
        //number of elements in each row excluding first and last element= i-2
        let rowElementsNo= i-2;
        for(let j=1; j <= rowElementsNo; j++){
            let c=a+b;
            str+=(c+" ");
            a=c;
            
        }
        str+=1;
        console.log(str);        
    }
}

pattern(9);