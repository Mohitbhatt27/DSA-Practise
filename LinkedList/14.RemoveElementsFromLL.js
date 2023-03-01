function removeElements(head, val) {
  let dummy = new ListNode();
  dummy.next = head; 
  let temp = dummy; 

  while (temp.next != null) {
    if (temp.next.val == val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummy.next;
}

/*1-2-3-6-4-5-6, 6

*/
