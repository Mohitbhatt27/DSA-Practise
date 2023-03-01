var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let curr_s = s[i];
    let curr_t = t[i];

    if (obj[curr_s]) {
      if (obj[curr_s] != curr_t) {
        return false;
      }
    } else {
      //check if curr_t is not already assigned previously
      if (Object.values(obj).includes(curr_t)) {
        return false;
      }
      obj[curr_s] = curr_t;
    }
  }

  return true;
};
