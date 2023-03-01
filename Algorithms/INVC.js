process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  // press ctrl+d in the terminal and then your main function will be executed automatically
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function readNumberArray() {
  let input = readLine(); // 1 2 3 4 5
  input = input.split(" "); // ['1', '2', '3', '4', '5']
  input = input.map((value) => Number(value)); // [1,2,3,4,5]
  return input;
}

function readNumberArrayByLine(noOfLines) {
  let result = [];
  for (let i = 0; i < noOfLines; i++) {
    result.push(Number(readLine()));
  }
  return result;
}

function readStringArray() {
  let input = readLine();
  return input.split(" ");
}

function readNumber() {
  return Number(readLine());
}

function readPairOfNumbers() {
  let input = readLine();
  input = input.split(" ").map((value) => Number(value));
  return input;
}

function readBoolean() {
  return Boolean(readLine());
}

function main() {
  let t = Number(readLine()); // took input as string and then converted to a number
  for (let i = 0; i < t; i++) {
    let d = readLine();
    let firstnumber=readNumber();
    let arr=readNumberArrayByLine(firstnumber);
    arr.unshift(firstnumber);
    console.log(mergeSortAndCount(arr, 0, arr.length - 1)); 
}
}

function mergeAndCount(arr, l, m, r) {
  // Left subarray
  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

  // Right subarray
  let right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = l,
    swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {
  // Keeps track of the inversion count at a
  // particular node of the recursion tree
  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    // Total inversion count = left subarray count
    // + right subarray count + merge count

    // Left subarray count
    count += mergeSortAndCount(arr, l, m);

    // Right subarray count
    count += mergeSortAndCount(arr, m + 1, r);

    // Merge count
    count += mergeAndCount(arr, l, m, r);
  }
  return count;
}
