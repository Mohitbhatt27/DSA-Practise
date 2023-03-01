function reverse(str){
    ans="";
    length=str.length;
    for(let i=length-1; i>=0; i--){
        ans+=str.charAt(i);
    }
    return ans;
}
console.log(reverse("Mohit"));