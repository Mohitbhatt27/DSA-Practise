/*

 Sandglass Star Pattern
 Enter the number of rows: 5

* * * * * 
 * * * * 
  * * * 
   * * 
    * 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 

1,2,3,4,5
4,3,2,1,0
i+j=n

*/

function top(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let space=1; space<i; space++){
            str+=" ";
        }
        for(let j=5; j>=i; j--){
            str+="*"+" ";
        }
        console.log(str);
    }
}
function bottom(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let space=1; space<=n-i; space++){
            str+=" ";
        }
        for(let j=1; j<=i; j++){
            str+="*"+" ";
        }
        console.log(str);
    }
    }

top(5);
bottom(5);