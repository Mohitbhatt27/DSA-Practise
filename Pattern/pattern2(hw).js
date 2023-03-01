/*
for n=7;
****@****
***@@@***
**@@@@@**
*@@@@@@@*
*@@@@@@@*
**@@@@@**
***@@@***
****@****


i   j   rows   n     
1   4   3      7
2   3   3      7
3   2   3      7


*/

function upperleftstars(n){
    let rows= Math.floor(n/2);
    for(let i=1; i<=rows; i++){
        let str="";
        //left stars
        for(let j=1; j<=rows-i+2; j++){
            str+="*";
        }
        //middle space
        for(let s=1; s<=(i*2-1); s++){
            str+="@";
        }
        //right stars
        for(let k=1; k<=rows-i+2; k++){
            str+="*";
        }

        console.log(str);
    }
}

function midthing(n){
    for(let i=1; i<=2; i++){
        let str="*";
        //midspace
        for(let j=1; j<=n; j++){
            str+="@";
        }
        str+="*";
        console.log(str);
    }
}
function bottompart(n){
    let rows= Math.floor(n/2);
    for(let i=rows; i>=1; i--){
        let str="";
        //left stars
        for(let j=1; j<=rows-i+2; j++){
            str+="*";
        }
        //middle space
        for(let s=1; s<=(i*2-1); s++){
            str+="@";
        }
        //right stars
        for(let k=1; k<=rows-i+2; k++){
            str+="*";
        }

        console.log(str);
}
}



function callall(n){
    upperleftstars(n);
    midthing(n);
    bottompart(n);
}

callall(7);