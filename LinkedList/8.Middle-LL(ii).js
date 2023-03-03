//In this ques if the linked list has even elem and has two middle, return the first middle

function middleOfAList(head) {
  let hare = head;
  let tortoise = head;
  while (hare.next != null && hare.next.next != null) {
    //returns 1st middle in case of even
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  return tortoise;
}