//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var findMedianSortedArrays = function(arr1, arr2) {
    let l1=arr1.length;
    let l2=arr2.length;
    let result=Array(l1+l2);
    let i=0,j=0,k=0;
    while(i<l1 && j<l2){
        result[k++]=arr1[i]<arr2[j]?arr1[i++]:arr2[j++];
    }
    while(i<l1){
        result[k++]=arr1[i++];
    }
    while(j<l2){
        result[k++]=arr2[j++];
    }
    let lengthsorted=result.length;
    if(lengthsorted %2==0){
        return ((result[lengthsorted/2]+result[lengthsorted/2 -1])/2);
    }
    else return result[Math.floor(lengthsorted/2)];
};
