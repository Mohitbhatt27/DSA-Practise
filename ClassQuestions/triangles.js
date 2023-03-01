//Check if triangle is possible with these sides

let a=2, b=4, c=6;
if((a+b)>c && (b+c)>a && (a+c)>b){
    console.log("Triangle possible");
}
else{
    console.log("Triangle not possible");
}