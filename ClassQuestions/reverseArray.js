function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    return arr;
}

function reverseArray(arr){
    let i=0, j=arr.length-1;
    while(i<j){
        swap(arr,i,j);
        i++;
        j--;
    }
    console.log(arr);
}

let arr=[1,2,3,4,5,6,7];
reverseArray(arr);
