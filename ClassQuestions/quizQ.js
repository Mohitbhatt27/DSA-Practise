/*
Given a positive integer A, find a pair of integers a, b such that
a and b are positive
A <= B
a^2 + b^2 = A
0<=A<=100000
*/

let integerpair =(A)=>{
    for(let i=1; i<=A; i++){
        //finding b with Sqrt(A-a^2) and checking
        let b= Math.sqrt(A-(i*i)); 
        //checking if b is an integer
        if(Math.ceil(b)===Math.floor(b) && i<=b){ 
            console.log(i,b);
            //breaking when we find the first pair as only one pair is needed
            break;
        }
    }
}
integerpair(100000);