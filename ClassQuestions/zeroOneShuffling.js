
let arr11 = [0, 1, 0, 1, 0, 0, 1];
let left = 0, right = arr11.length - 1;

for (let i = 0; i < arr11.length; i++) {

 while (left < right) {

    if (arr11[left] == 1) {
        //swap
      let temp = arr11[left];
      arr11[left] = arr11[right];
      arr11[right] = temp;
      right = right - 1;

    } else {
      left = left + 1;
    }
  }
}
console.log(arr11);
