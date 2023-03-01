//prime or not
const num=31;
var flag=0;
for(i=2; i*i<=num; i++){
    if(num%i==0){
        flag=1;
        break;
    }  
}
if(flag==0){
    console.log("prime");
}
else console.log("not prime");