function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    return arr;
}

function maxMin(arr){
    let min=arr[0]<=arr[1]? arr[0]:arr[1];
    let max=arr[0]>=arr[1]? arr[0]:arr[1];
    for(let i=2; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(min,max)
}

let a=[4, 4]
maxMin(a);
