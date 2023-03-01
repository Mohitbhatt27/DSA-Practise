function doubledElem(arr){
    let start = 0;
    let end = arr.length-1; 
    while(start<end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]==mid){
            start=mid+1;
        }
        else{
            end = mid;
        }
    }
    return arr[start];
}

console.log(doubledElem([0,1,2,3,4,4,5,6]));