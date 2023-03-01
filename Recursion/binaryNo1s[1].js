/**
 * Given a positive integer N, count all possible distinct binary strings of length N such that there are no consecutive 1’s.
 * n=1, 2; 0,1
 * n=2; 3; 10, 01, 00
 * n=3; 5; 100,101, 010, 001, 000
 * n=4; 8; 
 * 
 */

function nonconsequitive1(n){
    if(n==1) return 2;
    if(n==2) return 3;

    return nonconsequitive1(n-1)+nonconsequitive1(n-2);
};
for(let i=1; i<=5; i++)
console.log(nonconsequitive1(i));