var count = 0;
inversionCount([1,2,3,4,1], 5);
console.log(count);

function inversionCount(arr, n) {
  merge_sort(arr, 0, n - 1);
  return count;
}
function merge_sort(arr, start, end) {
  if (start == end) {
    return [arr[start]];
  }
  let mid = Math.floor((start + end) / 2);
  let left = merge_sort(arr, start, mid);
  let right = merge_sort(arr, mid + 1, end);
  let res = merge(left, right);
  return res;
}
function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      count += left.length - i;
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}
