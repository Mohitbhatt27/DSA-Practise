var findInMountainArray = function (target, mountainArr) {
  let peakIndex = findPeakIndexInMountainArray(mountainArr);
  
  let ans = orderAgnosticBinarySearch(mountainArr, target, 0, peakIndex);
  if (ans != -1) return ans;
  return orderAgnosticBinarySearch(
    mountainArr,
    target,
    peakIndex + 1,
    mountainArr.length - 1
  );
};
function findPeakIndexInMountainArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    //last elem will not be the peak
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      //we are in the descending part of the array
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function orderAgnosticBinarySearch(array, target, start, end) {
  let isAscending = array[start] < array[end];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == target) return mid;
    if (isAscending) {
      if (array[mid] > target) end = mid - 1;
      else start = mid + 1;
    } else {
      if (array[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
  }
  return -1;
}

console.log(findInMountainArray(1, [0,5,3,1]));