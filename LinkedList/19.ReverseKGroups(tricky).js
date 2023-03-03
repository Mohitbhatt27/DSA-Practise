var reverseKGroup = function (head, k) {
  if (head == null || k == 1) {
    return head;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let previous = dummy;
  let count = 0;
  let current = head;
  while (current != null) {
    count++;
    if (count % k == 0) {
      // console.log(previous); previous.val initially is 0
      // console.log(current.next); current.next.val initially is 3
      //so we find our new previous and current, by passing these values in our reverse function, what we need to keep in mind is that we need to reverse the value between 0 and 3
      previous = reverse(previous, current.next);
      current = previous.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};

function reverse(start, end) {
  //start and end are two nodes, and we need to reverse the value between them

  let previous = start.next;
  let current = previous.next;

  while (current != end) {
    //current is not equal to end, as until before end, we need to reverse
    let next = current.next;
    current.next = start.next;
    start.next = current;
    current = next;
  }
  previous.next = end;
  return previous;
}
