//unstable count sort
function count_sort(arr) {
  /**
   * Time: O(n+k)
   * Space: O(k)
   */
  let min_el = Math.min(...arr);
  let max_el = Math.max(...arr);

  // range = max - min + 1
  let frequency = Array(max_el + 1).fill(0); // this array will store the frequency
  for (let i = 0; i < arr.length; i++) { // n
    let elem = arr[i];
    frequency[elem]++; // incrememnt the frequency of the current element in the frequency array
  }

  let output = [];
  for (let i = 0; i < frequency.length; i++) {// k
    while (frequency[i] > 0) { // n
      output.push(i);
      frequency[i]--;
    }
  }
  return output;
}

const arr = [3, 1, 2, 3, 4, 9, 1, 6];
const output = count_sort(arr);
console.log(output);
