function max(arr,idx,n,currentmax){
    
    if(idx==n){
        return currentmax;
    }
    
    return max(arr,idx+1,n,Math.max(arr[idx],currentmax));
    
}

let arr=[1,2,3,5,4];
let n=5, idx=0, currentmax=arr[0];
console.log(max(arr,idx,n,currentmax));