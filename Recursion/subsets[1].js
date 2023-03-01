
//if n is the length of a set, then count of subset = 2^n, based on pick/not pick
//1<<n = 2^n
//3>>1 = removes rightmost bit
//if 3&1 ==1, odd
function subset(arr){
    let n = arr.length;
    let p = (1<<n)-1; //2^n-1
    
    for(let num = 0; num<=p; num++){
        let temp = num;
        let res = [];
        let j = arr.length - 1;  

        while(j>=0 && temp>0){     
            let isEven = temp%2==0;
            if(!isEven){ //if it's odd, last bit would be 1 and we want it
                res.push(arr[j]);
            }
            j--;
            temp=temp>>1; //removing last bit now
        }     
        console.log(res);
    }
}

console.log(subset([1,2,3]));