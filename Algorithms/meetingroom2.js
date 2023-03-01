function meetingRooms(intervals) {
  let start = [];
  let end = [];
  for (let i = 0; i < intervals.length; i++) {
    start.push(intervals[i][0]);
    end.push(intervals[i][1]);
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let i = 0, j = 0;
  let finalNumberOfRooms = 0;
  let currentroom = 0;
  while (i < start.length && j < end.length) {
    if (end[j] <= start[i]) {
      currentroom--;
      j++;
    } else {
      currentroom++;
      finalNumberOfRooms = Math.max(finalNumberOfRooms, currentroom);
      i++;
    }
  }
  return finalNumberOfRooms;
}

let interval = [[1, 18],[18, 23],[15, 29],[4, 15],[2, 11],[5, 13]];
console.log(meetingRooms(interval));
