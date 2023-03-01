/*Given n, print the pattern
****
****
****
for n=3
*/

function pattern1(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let j=1; j<=n; j++){
            str=str+"*";
            
        }
        console.log(str);
    }
}
/*
Pattern 2: 
*
**
***
****
*/

function pattern2(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let j=1; j<=i; j++){
            str=str+"*";
            
        }
        console.log(str);
    }
}
// pattern1(4);
// console.log("...............................");
pattern2(4);
console.log("...............................");


/*Given n, print the pattern
   *
  **
 ***
****
for n=4
*/

function pattern3(n){
    for(let i=1; i<=n; i++){
        let str="";
//i+s=n; s=n-i
        for (let s=1; s<=(n-i); s++){
            str+=" ";
        } 
        for(let j=1; j<=i; j++){
            str=str+"*";
            
        }
        console.log(str);
    }
}

pattern3(4);
console.log(".........................................")


/*
n=4
_ _ _ *
_ _ * * *
_ * * * * *
* * * * * * *
*/

function pattern4(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let s=1; s<=(n-i); s++){
            str+=" ";
        }
        for(let j=1; j<=(2*i-1); j++){
            str+="*";
        }
        console.log(str);
    }
}
pattern4(5);

console.log(".........................................");

/*
n=4
****
***
**
*

i=1,2,3,4 j=4,3,2,1; i+j=n+1; 

*/
function pattern5(n){
    for(let i=1; i<=n; i++){
        let str="";
        //i+j=n+1; j=n+1-i;
        for(let j=1; j<=(n+1-i); j++){
            str=str+"*";
            
        }
        console.log(str);
    }
}
console.log("\n \n");

//Diamond 
/*

       *
      ***
     *****
    *******
   *********
  ***********
 *************
***************
 *************
  ***********
   *********
    *******
     *****
      ***
       *

*/

function upperPattern(n){
    for(let i=1; i<=n; i++){
        let str="";
        for(let s=1; s<=(n-i); s++){
            str+=" ";
        }
        for(let j=1; j<=(2*i-1); j++){
            str+="*";
        }
        console.log(str);
    }

    }

function lowerPattern(n){
    for(let i=1; i<=n-1; i++){
        let str="";
        for(let s=1; s<=i; s++){
            str+=" ";
        }
        for(let j=1; j<= 2*(n-i)-1; j++){
            str+="*";
        }
        console.log(str);
    }
}
function diamond(n){
upperPattern(n);
lowerPattern(n);
}

diamond(8);
console.log("\n \n");

function butterflyPattern(n){
    
}  

butterflyPattern(9);
console.log("_______________________________________");

//Pattern new

function upperhalf(n){
    let rows=Math.floor(n/2);
    
    for(let i=1; i<=rows; i++){

        let str="";
        //left asterisk
        for(let lA=1; lA<=i; lA++){
            str+="*";
        }
        //mid space
        for(let s=1; s<=((rows-i)*2+1); s++){
            str+="@";
        }
        //right asterisk
        for(let rA=1; rA<=i; rA++){
            str+="*";
        }
        console.log(str);
    }
}
function middle(n){
    let str="";
    for(let i=1; i<=n; i++){
        str+="*";
    }
    console.log(str);
}
function lowerhalf(n){
    let rows=Math.floor(n/2);
    
    for(let i=rows; i>=1; i--){
        let str="";
        //left asterisk
        for(let lA=1; lA<=i; lA++){
            str+="*";
        }
        //mid space
        for(let s=1; s<=((rows-i)*2+1); s++){
            str+="@";
        }
        //right asterisk
        for(let rA=1; rA<=i; rA++){
            str+="*";
        }
        console.log(str);


}
}
function PatternNNN(n){
upperhalf(n);
middle(n);
lowerhalf(n);
}
PatternNNN(7);

 