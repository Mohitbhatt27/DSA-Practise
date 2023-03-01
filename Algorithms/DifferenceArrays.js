// Given Q ranges of the form [Li,Ri], find for each point x∈[1,N] the number of ranges that contain that point.

// 1≤N, Q≤10^7
// 1≤Li≤Ri≤10^7

// Let N=5
// diff =[0,0,0,0,0,0,0]
// Let Q=4. [1,3],[4,5],[3,4],[1,5]
// Output = []


function differencearrays(Q,diff){
    for(let i=0; i<Q.length; i++){
        let start=Q[i][0];
        let end=Q[i][1];
        diff[start]++;
        if( (end+1) <= diff.length-1){
        diff[end+1]--;
        }
    }
    console.log(diff);
    for(let i=1; i<diff.length; i++){
        diff[i]+=diff[i-1];
    }
    return diff;
}
let Q = [[1, 3],[4, 5],[3, 4],[1, 5]];
let diff = [0, 0, 0, 0, 0, 0, 0];
console.log(differencearrays(Q,diff));