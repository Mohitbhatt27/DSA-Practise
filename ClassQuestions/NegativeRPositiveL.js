//Move all negative numbers to the end and positive to the beginning of the array without using any predefined 
//sorting method.


function swap(list,x,y){
var b = list[y];
list[y] = list[x];
list[x] = b;
return list;
}

function positiveNegative(arr){
    let left=0, right=arr.length-1;
    while(left<=right){
        if(arr[left]<0){
            swap(arr,left,right);
            right--;
        }
        else{
            left++;   
        }
    }
    console.log (arr);
}

let arr=[-1,2,-2,3,0,-3,9,22,-8];
positiveNegative(arr);

