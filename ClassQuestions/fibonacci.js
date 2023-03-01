// function fibo(n){
//     let a=0;
//     let b=1;
//     if(n==0){
//     console.log(a);
//     return;
//     }
//     if(n==1){
//         console.log(a);
//         console.log(b);
//         return;
//     }
//     let count=2;
//     while(count<n){
//         let next=a+b;
//         console.log(next);
//         count++;
//         a=b;
//         b=next;
//     }
// }
// fibo(1);


function printFibonacci(n) {
    if(n == 0) {
        console.log(0);
        return;
    }
    if(n >= 1) {
        console.log(0);
        console.log(1);
    }
    let last = 1;
    let secondLast = 0;
    for(let i = 2; i <= n; i++) {
        let ans = last + secondLast;
        console.log(ans);
        secondLast = last;
        last = ans;
    }
}

printFibonacci(5);