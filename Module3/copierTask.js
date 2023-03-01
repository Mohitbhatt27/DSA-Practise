/*
This morning the jury decided to add one more , very easy problem to the problem set of the Olympiad. The executive secretary of the organizing committee has printed its statement in one copy and now they need to make n more copied before the start of the Olympiad. They have two copiers at his disposal, one of which copies a sheet in x seconds and other in y seconds.(It is allowed to use one copier or both at the same time. You can copy not only from the original , but also from the copy.) Help them find out what is the minimum time they need to make n copies of the statement.

Input:
The program receives 3 integers n, x, y (1 <= n <= 2.10⁸, 1 <=x,y <= 10)

Output:
Print one integer, the minimum time in seconds required to get n copies.
*/



function veryEasyTask(n, x, y) {
  // Base case
  if (n == 1) {
    return Math.min(x, y);
  }
  
  function isGood(mid, n, x, y) {
    // We need to check whether mid time is enough to make n - 1 copies( remember we have ORIG)
    // C1 -> x seconds
    // C2 -> y seconds

    // no of copies C1 copier can make in mid seconds
    // (mid / x)

    // no of copies C2 copier can make in mid seconds
    // (mid / y)

    return Math.floor(mid / x) + Math.floor(mid / y) >= n - 1;
  }



  let ans = 0;
  let left = Math.min(x, y);
  let right = Math.max(x, y) * n;
  // Now the main code to do BinarySearch
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (isGood(mid, n, x, y)) {
      // thats a possible answer,but we want a better answer, so LEFT
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans + Math.min(x, y); // why min(x,y) to consider the original copy being used
}

const n = 4;
const x = 1;
const y = 1;
console.log(veryEasyTask(n, x, y)); // Output: 3
