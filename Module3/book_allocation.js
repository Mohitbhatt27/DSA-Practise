function canBePlaced(arr, totalStudents, mid) {
  let n = arr.length;
  let noOfStudentsWhoHaveBeenAllocatedBooksSoFar= 1, pages = 0;
  for (let i = 0; i < n; i++) {
    pages += arr[i];
    if (pages > mid) {
      pages = 0;
      noOfStudentsWhoHaveBeenAllocatedBooksSoFar += 1;
      i -= 1;
      if (noOfStudentsWhoHaveBeenAllocatedBooksSoFar > totalStudents) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  books: function (arr, students) {
    if (students > arr.length) {
      return -1;
    }
    let lo = 0,
      hi = 0,
      ans = -1,
      n = arr.length;
    for (let i = 0; i < n; i++) {
      hi += arr[i];
    }
    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (canBePlaced(arr, students, mid)) {
        ans = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    return ans;
  },
};
