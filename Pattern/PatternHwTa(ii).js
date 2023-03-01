/*
   *
  * *
 *   *
*     *
*******

*/

function pattern(n){
    for(let i=1; i<=n-1; i++){
        let str="";
        //n=5, i=1,2,3,4; s=3,2,1,0; i+s=n-1; s=n-1-i
        for(let outerspace=1; outerspace<=(n-1-i); outerspace++){
            str+=" ";
        }
        str+="*";
        //n=5, i=1,2,3,4; s=0,1,3,5; s=(((i-1)*2)-1); 
        for(let innerspace=1; innerspace<=(((i-1)*2)-1); innerspace++){
            str+=" ";
        }
        if(i!=1){
        str+="*";
        }
        console.log(str);
    }
    let lastline="";
    for(let lastIndex=1; lastIndex<=(((n-1)*2)-1); lastIndex++){
        lastline+="*";
    }
    console.log(lastline);
}

pattern(5);