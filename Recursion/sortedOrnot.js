/**
 * Thinking process:
 * base case: index+1==size, return true;
 */

function sortedOrnot(arr,i){
    if(i==arr.length) return true;
    if(arr[i]>arr[i+1]) return false;
    return sortedOrnot(arr,i+1);
}
let arr=[1,12,140,17];
console.log(sortedOrnot(arr,0));
