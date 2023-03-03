var rotateRight = function(head, k) {
    if (head == null || k == 0) {
    return head;
  }
   
  let len = 1;
  let tail = head;
  while (tail.next!=null) {
    len++;
    tail = tail.next;
  } //tail is now the original tail node

  k = k % len; //so it get done in 1 loop
  if (k == 0) {
    return head;
  }
  
  let newTail = head;
  for (let i = 0; i < len - k - 1; i++) {  // rotating k places to the right
    newTail = newTail.next;
  }
  
  tail.next = head;
  let newHead = newTail.next;
  newTail.next = null;
  
  return newHead;
    
};