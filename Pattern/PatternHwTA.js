/*

*
**
* *
*  *
*   *
******

n=6
*/

function pattern(n){
    for(let i=1; i<=n; i++){
        let str="";
        if(i<=1 || i==n){
            for(let j=1; j<=i; j++){
                str+="*";
            }
            console.log(str);
            continue;
        }

        for(let s=1; s<=(i-1); s++){
            str+=" ";
        }
        console.log("*"+str+"*");
    }
}

pattern(6);