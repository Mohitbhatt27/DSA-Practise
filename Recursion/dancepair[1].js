//Given that there are p people in a party. Each person can either join dance as a single individual or as a pair with any other. 
//The task is to find the number of different ways in which p people can join the dance.

/**
 * n=1, ans=1
 * A
 * 
 * n=2, ans=2
 * A,B
 * AB
 * 
 * n=3, ans=4
 * A,B,C
 * AB,C
 * AC,B
 * BC,A
 * 
 * n=4, ans= 10
 * A,B,C,D
 * AB,CD
 * AB,C,D
 * AC,A,D
 * AD,AC
 * BC,A,D
 * BC,AD
 * BD,A,C
 * BD,AC
 * CD,A,B
 * 
 * 
 * 
 *f(n)=f(n-1)+(n-1)*f(n-2)
 f(4)=4+3*2

 */

 function pairs(n){
    if(n==1) return 1;
    if(n==2) return 2;
//if nth friend decides to go alone then remaining people are n-1 who can make pairs among themselves
//if nth friend decided to go in pair, he can pair with n-1 people, and then n-2 can pair themselves
    return pairs(n-1)+(n-1)*pairs(n-2);
 }

 console.log(pairs(4));