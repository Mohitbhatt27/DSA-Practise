//skip a from a string using recursion

function skip(str,temp,i){
    if(i==str.length) return temp;
    
    if(str.charAt(i)=='a'){
        return skip(str,temp,i+1);
    }
    else{
        return skip(str,temp+str.charAt(i),i+1);
    }
}
console.log(skip("abcdeaf","",0));
