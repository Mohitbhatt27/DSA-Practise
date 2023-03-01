/*
Problem Statement: There is a new barn with N stalls and C cows. The stalls are located on a straight line at positions x1,….,xN (0 <= xi <= 1,000,000,000). We want to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?
*/

function possible(arr, c, mid) {
  let count = 1; // 1 cow minimum
  let last_pos_where_we_placed_cow = arr[0];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] - last_pos_where_we_placed_cow >= mid) {
      //let's place one more cow
      count++;
      last_pos_where_we_placed_cow = arr[i];
    }

    if (count >= c) {
      return true;
    }
  }
  return false;
}


function solve(arr,noOfCows) {
  let n = arr.length;
  arr.sort((a,b)=>a-b);
  let ans;

  let low = 1, high = arr[n - 1] - arr[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possible(arr, noOfCows, mid)) {
      ans=mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
let a = [1, 2, 8, 4, 9];
let cows = 3;
console.log(solve(a,cows));


