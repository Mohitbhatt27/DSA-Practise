/*
Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given) then find the position where the Ath item will be delivered.

Note: Distribution of Items are performed at the adjacent positions starting from C. 
Expected Input: Three integers A, B, C
Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C.
*/


function solution(a,b,c){
    let p=(c+a-1)%b;
    if(p==0)
    {
    console.log(b);
    }
    else
    {
    console.log(p);
    }
    }
    
    solution(2,5,1);