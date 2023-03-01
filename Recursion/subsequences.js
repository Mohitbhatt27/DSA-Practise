function subsequences(processed, unprocessed,ans){
    if(unprocessed.length==0){
        ans.push(processed);
        return;
    }
    let ch=unprocessed.charAt(0);
    subsequences(processed+ch,unprocessed.substring(1),ans);
    subsequences(processed, unprocessed.substring(1),ans);
    return ans;
}
console.log(subsequences("","abc",[]));
 

