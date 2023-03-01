/**
 * Take as input N, a number. N is the size of a snakes and ladder board (without any snakes and ladders). Take as input M, a number. M is the number of faces of the dice. 
 * 
 * a. Write a recursive function which returns the count of different ways the board can be travelled using the dice. Print the value returned. 
 * 
 * b. Write a recursive function which returns an ArrayList of dice values for all valid paths across the board. Print the value returned. e.g. for a board of size 10 and dice size 6, a few valid paths will be “64”, “46”, “2332”, “541” etc.
 * 
 *  c. Write a recursive function which prints dice-values for all valid paths across the board (void is the return type for function).
 */

function countWays(n, m) {
  if (n == 1) {
    return 1;
  }
  let ways = 0;
  for (let i = 1; i <= m && n-i >= 1; i++) {
    ways += countWays(n-i, m);
  }
  return ways;
}

function generatePaths(N, M, currentPath, result) {
  // Base case
  if (N === 1) {
    result.push(currentPath);
    return;
  }

  // Recursive case
  for (let i = 1; i <= M && N-i >= 1; i++) {
    let newPath = currentPath + i.toString();
    generatePaths(N-i, M, newPath, result);
  }
}

function printPaths(n, m, path) {
  if (n == 1) {
    console.log(path);
    return;
  }

  for (let i = 1; i <= m && n-i >= 1; i++) {
    let newPath = path + i.toString();
    printPaths(n-i, m, newPath);
  }
}
