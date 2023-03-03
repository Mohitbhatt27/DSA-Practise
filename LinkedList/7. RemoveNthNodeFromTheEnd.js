/*
 * We will have a slow pointer and a fast pointer and the fast pointer is just going to go up to the position plus one,  and then you're gonna let the fast pointer go to the end of the list while the slow pointer starts at the beginning from position plus one, and slow pointer will end up at the position right before.
 */

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0); //dummy node whose next points to head
  dummy.next = head;
  //By creating the temp node and linking it to the original list's head node, it makes it easier to handle cases where the first node needs to be removed.
  // set variables for next node and current node
  let slow = dummy;
  let fast = dummy;
  // set fast to n nodes ahead of slow
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  // While we haven't reached the end of the list
  // set slow to n nodes behind fast
  while (fast.next!=null) {
    slow = slow.next;
    fast = fast.next;
  }
  // set slow.next to two nodes ahead of slow
  // then return the nth node of the list
  slow.next = slow.next.next;
  return dummy.next;
};
