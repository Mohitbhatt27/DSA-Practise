/**
 * There are N stones, numbered 1,2,…,N. For each i (1 ≤ i≤ N), the height of Stone i is ), the height of Stone h[i]. There is a frog who is initially on Stone 1. It will repeat the following action some number of times to reach Stone N:

If the frog is currently on stone i, jump to stone i + 1 or Stone i + 2. Here, a cost of |h[i] - h[j]| is incurred, where j is the stone to land on Find the minimum possible total cost incurred before the frog reaches Stone N.
 */

function f(i, n, heights) {
    if(i == n) return 0;
    if(i == n-1) {
        // we are at the second last index, we can only go to the last index
        return Math.abs(heights[i] - heights[i+1]) + f(i+1, n, heights);
    }
    if(i > n) return Infinity;

    return Math.min(
        Math.abs(heights[i] - heights[i+1]) + f(i+1, n, heights), 
        Math.abs(heights[i] - heights[i+2]) + f(i+2, n, heights)
    );
    }

  /*
  There are N stones, numbered 1, 2,..., N.Foreachi(1 < i < N),the height of Stone 7 is hj.
There is a frog who is initially on Stone 1. He will repeat the following action some number of times to reach Stone N:

* If the frog is currently on Stone i, jump to one of the following: Stone i + Di + 2,...,i + K.Here,acost of |h; — hy| is
incurred, where j is the stone to land on.

Find the minimum possible total cost incurred before the frog reaches Stone N.

  */




  