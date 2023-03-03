function partition(head, x) {
    if (!head) {
      return head;
    }
    
    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);
    
    let p1 = dummy1;
    let p2 = dummy2;
    
    // Traverse the input list and append each node to the appropriate partition
    let current = head;
    while (current) {
      if (current.val < x) {
        p1.next = current;
        p1 = p1.next;
      } else {
        p2.next = current;
        p2 = p2.next;
      }
      current = current.next;
    }
    
    // Combine the two partitions
    p1.next = dummy2.next;
    p2.next = null;
    return dummy1.next;
  }