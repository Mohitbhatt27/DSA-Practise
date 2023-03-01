var deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  while (temp.next != null) {
    if (temp.val == temp.next.val) {
      temp.next = temp.next.next;
    } else temp = temp.next;
  }
  return head;
};
