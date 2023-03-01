function maxLen(arr,n){
    let ans=0;
    let pre=[];
    pre.push(arr[0]);
    for(let i=1; i<n; i++){
        pre[i]=(pre[i-1]+arr[i]);
    }
    console.log(pre);
    let obj={};
    for(let i=0; i<pre.length; i++) {
        if(!obj[pre[i]]){
            //making this i+1, to handle 0 index
            obj[pre[i]]=i+1;
            console.log(obj);
        }
        else{
            ans=Math.max(ans, (i+1-obj[pre[i]]));
        }
    }
console.log(obj);
return ans;
}
console.log(maxLen([15,-2,2,-8,1,7,10,23],8));

