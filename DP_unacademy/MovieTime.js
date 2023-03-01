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
  let startTime = readNumberArray();
  let endTime = readNumberArray();

  let ans = [];
  for (let i = 0; i < startTime.length; i++) {
    ans.push(endTime[i] - startTime[i]);
  }

  ans.sort((a, b) => a - b);

  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
}
