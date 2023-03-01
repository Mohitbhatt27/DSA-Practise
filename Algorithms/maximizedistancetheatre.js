var maxDistToClosest = function (seats) {
  let n = seats.length;
  let closestLeft = -Infinity;
  let closestRight = -Infinity;
  let result = -1;
  for (let i = 0; i < n; i++) {
    if (seats[i] == 1) {
      closestLeft = i;
      closestRight = i;
    } else {
      //we need to make sure that closestright is not on the left of i
      //if it is, find closestRight on the rightside
      if (i > closestRight) {
        closestRight = i; //important step, as we are trying to find closestRight on the right side
        while (closestRight < n && seats[closestRight] == 0) {
          closestRight++;
        }

        //if we are towards the end, and the last element is 0, and we have still not found the 1, that means there are no 1s on the right, so we will make closestRight as infinty

        if (closestRight == n) {
          closestRight = Infinity;
        }
      }

      result = Math.max(result, Math.min(i - closestLeft, closestRight - i));
    }
  }

  return result;
};
