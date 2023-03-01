/**
 * Given an array of N integers arr[] where each element represents the max length of the jump that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
Note: Return -1 if you can't reach the end of the array.
 */

//wrong

    // function minJumps(arr){
    //     let index=0;
    //     return min(arr,index);
    // }
    // function min(arr,index){
    //     if(index>=arr.length-1) return 0;
    //     //if(index==n-1) return 1;
    //     if (arr[index] == 0) {
    //         return Infinity;
    //       }

    //     let count=Infinity;
        
    //     for(let i=1; i<=arr[i]; i++){
    //         count=Math.min(count,min(arr,index+i));
    //     }
    //     return count+1;
    // }
    // console.log(minJumps([1,4,3,2,6,7]));
