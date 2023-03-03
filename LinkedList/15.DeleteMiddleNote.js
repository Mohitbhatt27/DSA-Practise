var deleteMiddle = function (head) {
  if (head.next == null) return null; //if there is 1 node only

  let slow = head;
  let fast = head.next.next; 

  //why fast = head.next.next? We are giving fast a headstart.
  //why? Because we don't need the middle, we need one elem before middle

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
