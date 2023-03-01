function swap(arr,a,b){
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
    return arr;
}

function sort(arr){
    let i=0, j=0, k=arr.length-1;
    while (j<k){
        if(arr[j]==0){
            //j window must contain only 1, so swap with i window
            swap(arr,i,j);
            //i window must increase by 1
            //j window must increase by 1 to check the next element
            i++;
            j++;
        }
        else if(arr[j]==1){
            //j window increase by 1
            j++;
        }
        else{
            //swap with k window
            swap(arr,j,k);
            //k window must decreases by 1
            k--;
        }
    }
    return arr;
}
let a=[1,0,0,2,1,0,1,0,2,2,1,0];
console.log(sort(a));