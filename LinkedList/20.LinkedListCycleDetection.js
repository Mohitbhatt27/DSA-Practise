var hasCycle = function (head) {
  let hare = head,
    tortoise = head;
  while (hare != null && hare.next != null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare == tortoise) {
      return true;
    }
  }
  return false;
};
