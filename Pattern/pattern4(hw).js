/*

n=5

5
54
543
5432
54321
543210
54321
5432
543
54
5

*/

function top(n){
    for(let i=n; i>=1; i--){
        let str="";
        for(let j=n; j>=i; j--){
            str+=j;
        }
        console.log(str);
    }
}
function mid(n){
    let str="";
    for(let i=n; i>=0; i--){
        str+=i;
    }
    console.log(str);
}
function bottom(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let j=n; j>=i; j--){
            str+=j;
        }
        console.log(str);
    }

}
function allinone(n){
    top(n);
    mid(n);
    bottom(n);
}

allinone(9);

