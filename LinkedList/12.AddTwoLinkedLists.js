/*
 Given the heads of two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
l1 = [2,4,3]
l2 = [5,6,4]
Result: sum = 807; L = [7,0,8]
*/

function add(l1, l2) {
  let dummy = new ListNode(); //head of new linked list
  let temp = dummy; //temp node, initially = dummy
  let carry = 0; //carry must be either 0 or 1 because of 19 being the max

  //looping until carry is present or both lists have exhausted
 // carry == 1 is also needed in while to handle the corner case when both link have exhausted but there still is some carry still left
 
  while (l1 != null || l2 != null || carry == 1) {
    let sum = 0; //sum = l1.val + l2.val + carry;

    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;

    carry = Math.floor(sum / 10); //carry will always be sum/10
    let node = new ListNode(sum % 10); //new node which will have one digit
    temp.next = node; //set it to temp node’s next.
    temp = temp.next; //move temp node ahead
  }

  return dummy.next;
}

//l1=[9,9], l2=[1]	The sum could have an extra carry of one at the end, which is easy to forget.

