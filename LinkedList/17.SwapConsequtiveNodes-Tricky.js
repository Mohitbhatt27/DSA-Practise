//Reverse the linked list in pairs. If you have a linked list that holds 1
// →2→3→4→X, then after the function has been called the linked list would hold 2→ 1→4
// →3→X.

//very important to understand this method from Narshima book

var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  //1,2,3,4,x
  let newNode = head.next;  //first moving temp node to 2, so later head can be made 2, and it will also help us to connect our head of linked list with 3
  head.next = newNode.next; //head which was 1, now connects to 3, as discussed
  newNode.next = head; //temp which was having 2, now connects to head, which was 1, and ll is 2->1->3->X
  head = newNode; //head needs to be at first, and temp was containing the first elem (2)

  head.next.next = swapPairs(head.next.next); //since we are dealing in pair

  return head;
};

