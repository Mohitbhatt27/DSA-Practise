var detectCycle = function (head) {
  let hare = head, tortoise = head;
  while (hare != null && hare.next != null) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare == tortoise) {
      tortoise = head; //refreshing tortoise
      while (hare != tortoise) {
        tortoise = tortoise.next;
        hare = hare.next;
      }
      return tortoise;
    }
  }
  return null;
};
