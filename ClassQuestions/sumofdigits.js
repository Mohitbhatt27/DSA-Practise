function sumofdigits(num){
    let sum = 0;
    while(num != 0){
        let d = num%10;
        sum += d;
        num=Math.floor(num/10);
    }
    return sum;
}

console.log(sumofdigits(4136));
console.log(sumofdigits(1273));