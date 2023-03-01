function deleteDuplicates(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  while (curr != null) {
    if (curr.next != null && curr.val == curr.next.val) {
        //if curr node is equal to next node, keep skipping all the nodes till you reach the last of those duplicates
      while (curr.next != null && curr.val == curr.next.val) {
        curr = curr.next;
      }
      //at this point curr stores the last node which has duplicate value, we dont even want this
      prev.next = curr.next;
    }
     else { //no duplicates
      prev = prev.next;
    }
    curr = curr.next;
  }
  return dummy.next;
}
