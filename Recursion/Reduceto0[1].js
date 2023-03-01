/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

var numberOfSteps = function(num) {
    if(num==0) return 0;
    if(num==1) return 1;
    
    if(num%2==0){
        return 1+numberOfSteps(num/2);
    }
    else return 1+numberOfSteps(num-1);
}