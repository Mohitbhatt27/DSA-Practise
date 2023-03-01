function countSubarraySum0(arr) {
  let count = 0;
  let pref = Array(arr.length).fill(0);
  pref[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    pref[i] = pref[i - 1] + arr[i];
  }
  console.log(pref)
  let obj = {};
  for (let i = 0; i < pref.length; i++) {
    if (pref[i] == 0) count++; 
    if (obj[pref[i]]) {
        //add the number of previous occurances
        count += obj[pref[i]];
        obj[pref[i]]++;   
    }
    else
    obj[pref[i]] = 1;
  }
  return count;
}

let arr = [3,1,-1,2,3,-3,7,-9,2,-1,1];
console.log(countSubarraySum0(arr));
