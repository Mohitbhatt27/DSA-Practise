let ans;
function greatest(a,b,c){
    if(a>b && a<c)
    ans=a;
    if(b>a && b>c)
    ans=b;
    if(c>a && c>b)
    ans=c;
    if(a==b && a>c)
    ans=a;
    if(a==c && a>b)
    ans=a;
    if(a==b && a==c)
    ans="all three are equal";
    if(a==b && b>c)
    ans=b;
    if(b==c && b>a)
    ans=b;
    if(a==c && c>b)
    ans=c;
    if(c==b && c>a)
    ans=c;
    return ans;
}
console.log(greatest(3,13,8));