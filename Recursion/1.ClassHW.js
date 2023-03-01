// Q1: Take as input N, a number. Print odd numbers in decreasing sequence (up until 0) and even numbers in increasing sequence (up until N). E.g. for N = 6 print 5 3 1 2 4

function printNumbers(N) {
  if (N < 1) {
    return; 
  }

  // Print odd numbers in decreasing sequence
  if (N % 2 !== 0) {
    console.log(N);
  }

  printNumbers(N - 1); // Recursive call with N-1

  // Print even numbers in increasing sequence
  if (N % 2 === 0) {
    console.log(N);
  }
}

printNumbers(6); // Call the function with N=6
