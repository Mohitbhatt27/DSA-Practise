/*

    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

n=5;

*/
function pattern(n){
    for(let i=1; i<=2*n-1; i++){
        let str="";

        if(i<n){
            //n=5; i=1,2,3,4; s=0,1,3,5; (((i-1)*2)-1)
            for(let topLeftSpace=1; topLeftSpace<=(((i-1)*2)-1); topLeftSpace++){
                str+="@";
            }


        }

        if(i>n){
            //n=5; i=6,7,8,9; s=5,3,1,0; i-n=1,2,3,4; i+n=11,12,13,14; i-s=1,4,7,9
            for(let s=n; s>=1; s-=2){
                str+="@";
            }

        }
        console.log(str);
    }
}
pattern(5)