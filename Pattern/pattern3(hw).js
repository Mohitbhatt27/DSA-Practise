/*
n=4;

@@@1
@@121
@12321
1234321

*/

function pattern(n){
    for(let i=1; i<=n; i++){
        let str="";

        for(let j=1; j<=(n-i); j++){
            str+="@";
        }

        //middle

        for(let k=1; k<=i; k++){
            str+=k;
        }

        //right
        for(let m=i-1; m>=1; m--){
            str+=m;
        }

        console.log(str);
    }
}

pattern(4);