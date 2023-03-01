// var findKthLargest = function (arr, k) {
//   return quickSort(arr, k - 1, 0, arr.length - 1);
// };
// function quickSort(arr, k, left, right) {
//   if (left < right) {
//     let pivotIndex = left + Math.floor(Math.random() * (right - left));
//     pivotIndex = partition(arr, left, right, pivotIndex);
//     if (k === pivotIndex) {
//       return arr[k];
//     } else if (k < pivotIndex) {
//       return quickSort(arr, k, left, pivotIndex - 1);
//     } else {
//       return quickSort(arr, k, pivotIndex + 1, right);
//     }
//   }
//   return arr[k];
// }

// function partition(arr, left, right, pivotIndex) {
//   let pivotValue = arr[pivotIndex];
//   swap(arr, pivotIndex, right);
//   let storeIndex = left;
//   for (let i = left; i < right; i++) {
//     if (arr[i] > pivotValue) {
//       swap(arr, storeIndex, i);
//       storeIndex++;
//     }
//   }
//   swap(arr, right, storeIndex);
//   return storeIndex;
// }

// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }


// The main function which takes an array and a value k, and returns the kth largest element in the array
var findKthLargest = function(arr, k) {
    // calls the quickSort function with the proper parameters
    return quickSort(arr,k-1,0,arr.length-1);
}

// quickSort function which sorts the array in descending order and uses the partition function to find the kth largest element by recursively partitioning the array and comparing the pivot index with k.
function quickSort(arr, k, left, right) {
    if (left < right) {
        // Selects a random pivot index between left and right
        let pivotIndex = left + Math.floor(Math.random() * (right - left));
        pivotIndex = partition(arr, left, right, pivotIndex);
        // If the pivot index is equal to k then return the element at kth index
        if (k === pivotIndex) {
            return arr[k];
        } 
        // If k is less than pivot index then recursively call the quickSort on left side of pivot
        else if (k < pivotIndex) {
            return quickSort(arr, k, left, pivotIndex - 1);
        } 
        // If k is more than pivot index then recursively call the quickSort on right side of pivot
        else {
            return quickSort(arr, k, pivotIndex + 1, right);
        }
    }
    // Return the element at kth index
    return arr[k];
}

// A partition function which takes an array, left and right index and pivotIndex as an input. 
// It rearranges the elements of the array such that all elements less than the pivot are to the left of it and all elements greater than pivot are to the right of it.
function partition(arr, left, right, pivotIndex) {
    let pivotValue = arr[pivotIndex];
    // swap the pivot element with the last element
    swap(arr, pivotIndex, right);
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        // if the element at i-th index is greater than pivot then swap it with the element at storeIndex
        if (arr[i] > pivotValue) {
            swap(arr, storeIndex, i);
            storeIndex++;
        }
    }
    // swap the last element with the element at storeIndex
    swap(arr, right, storeIndex);
    return storeIndex;
}

// A helper function which swap the elements at i-th and j-th index of the array
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
