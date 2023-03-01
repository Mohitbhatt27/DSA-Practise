/*
Write code for finding the smallest element in an array.
*/

let numbers = [5, 10, 15, 20, 25];
smallest(numbers);

function smallest(numbers){
// define a variable to hold the smallest number
var smallest = numbers[0];

// loop through the array and compare each element to the current smallest number
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log(smallest); // 5
}