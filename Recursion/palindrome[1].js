//Palindrome using recursion

function palindrome(word,start,end){
    if(start>=end){
        return true;
    }
    if(word.charAt(start)!=word.charAt(end)){
        return false;
    }

    return palindrome(word,start+1,end-1);
}
let str="maam";
console.log(palindrome(str,0,str.length-1));