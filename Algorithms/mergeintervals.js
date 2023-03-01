/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let start = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (start[1] >= intervals[i][0]) {
      start[1] = (start[1] >= intervals[i][1]) ? start[1] : intervals[i][1];
    } else {
      ans.push(start);
      start = intervals[i];
    }
  }
  ans.push(start);
  return ans;
};