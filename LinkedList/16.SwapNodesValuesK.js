function swapNodesValues(head, k) {
  let left = head;
  let right = head;

  let c = 0;
  while (left != null) {
    c++;
    if (c == k) {
      break;
    }
    left = left.next;
  }
  //right -> head
  //left -> kth value from left

  // now we need to find the k-th last element
  let newNode = left;
  while (newNode.next != null) {
    newNode = newNode.next;
    right = right.next;
  }

//the trick is that we first move our left to k from left, then we make another pointer that starts with left and move till end, and along with the movement of another pointer, we also move our right pointer, eventually right pointer will be at n-kth elem when another pointer is at nth elem

//now our right and left are at correct place, just swap the values

let temp = left.val;
left.val = right.val;
right.val = temp

return head;
}