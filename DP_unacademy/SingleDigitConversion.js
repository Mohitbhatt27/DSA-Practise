process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function readNumberArray() {
  let input = readLine(); 
  input = input.split(" "); 
  input = input.map((value) => Number(value));
  return input;
}

function main() {
  let input = readNumberArray();
  console.log(singleDigitConversion(input));
}
function singleDigitConversion(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    while (num > 9) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      num = sum;
    }
    output.push(num);
  }
  return output;
}
