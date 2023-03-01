var isPalindrome = function (head) {
  let temp = head;
  let middle = middleOfAList(head);
  //now middle contains the mid node
  //reverse the node after that
  let rev = reverseList(middle.next);
  //now rev contains the remaining link list in reverse order

  while (head <= rev) {
    if (head.val != rev.val) {
      return false;
    } else {
      head = head.next;
      rev = rev.next;
    }
  }
  return true;
};

function middleOfAList(head) {
  let hare = head;
  let tortoise = head;
  while (hare.next != null && hare.next.next != null) {  //first middle not second in case of 2 middles
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  return tortoise;
}

var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let newHead = reverseList(head.next);
  let nextOfOriginalHead = head.next;
  nextOfOriginalHead.next = head;
  head.next = null;
  return newHead;
};
