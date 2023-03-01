/*
Write code in javascript for creating a new sorted array from two sorted arrays in O (n + m) time complexity without using inbuilt functions where n and m are the size of the unsorted arrays.
*/


// Define the two sorted arrays
let arr1 = [1, 4, 7, 9, 11];
let arr2 = [2, 5, 6, 8, 10];
sort(arr1,arr2);

function sort(arr1,arr2){
// Define an empty array to store the result
let result = [];

// Define two pointers to track the current index in each array
let i = 0;
let j = 0;

// Loop until one of the arrays is fully traversed
while (i < arr1.length && j < arr2.length) {
// Compare the values at the current indices in each array
if (arr1[i] < arr2[j]) {
// Add the smaller value to the result array and increment the pointer for that array
result.push(arr1[i]);
i++;
} else {
// Add the smaller value to the result array and increment the pointer for that array
result.push(arr2[j]);
j++;
}
}

// If there are remaining elements in either array, add them to the result array
while (i < arr1.length) {
result.push(arr1[i]);
i++;
}
while (j < arr2.length) {
result.push(arr2[j]);
j++;
}
// Print the result array
console.log(result); // [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
}