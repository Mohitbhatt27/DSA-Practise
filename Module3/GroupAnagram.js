var groupAnagrams = function (strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let sorted_curr = curr.split("").sort();
    if (obj[sorted_curr]) {
      obj[sorted_curr].push(curr);
    } else {
      obj[sorted_curr] = [curr];
    }
  }
  return Object.values(obj);
};
