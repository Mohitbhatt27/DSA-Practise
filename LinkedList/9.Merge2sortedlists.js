var mergeTwoLists = function (list1, list2) {
  // Create a dummy node
  let dummy = new ListNode(0);
  let mergedListPointer = dummy;

  while (list1 && list2) {

    if (list1.val < list2.val) {
      // append it to the merged list and move list 1 to the next node
      mergedListPointer.next = list1;
      list1 = list1.next;

    } else {
      mergedListPointer.next = list2;
      list2 = list2.next;
    }
    // Move the current pointer to the next node in the merged list
    mergedListPointer = mergedListPointer.next;
  }

  // If p or q is not null
  if (list1) {
    mergedListPointer.next = list1;
  } else {
    mergedListPointer.next = list2;
  }

  return dummy.next;
};
