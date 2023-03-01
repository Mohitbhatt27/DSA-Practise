//can be easily done by sorting in nlogn, but we need to do it in O(n)
//let's first make a map and see what can be done

let lonestconsecutiveSubsequenceLength=(arr)=>{
    let n = arr.length;
    let obj = {};
    for(let i = 0; i < n; i++){
        let elem = arr[i];
        if(obj[elem]){
            obj[elem]++;
        }
        else{
            obj[elem] = 1;
        }
    }
   
    let maximum_length = -1; 
    for(let i = 0; i < n; i++){
        let currentLength = 1; //minimum length
        let elem = arr[i];
        if(obj[elem-1]){
            //then definetly elem can not be the start of a subsequence, so we move ahead;
        }
        else{
            //we have found a start of a subsequence
            //now keep finding the next elem
            while(obj[++elem]){
                currentLength++;
            }
            maximum_length = Math.max(currentLength, maximum_length);
        }
    }
    console.log(maximum_length);
}
lonestconsecutiveSubsequenceLength([100, 4, 200, 1, 3, 2]);