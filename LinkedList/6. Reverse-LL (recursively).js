function reverse(head){

    if(head==null || head.next==null) {
        return head;
    }

    let newHead = reverse(head.next);
    let nextOfOriginalHead = head.next;
    nextOfOriginalHead.next = head;
    head.next = null;
    return newHead;

}

/**
 * Working --->
 * Reverse function is called with every elem except one, we assume that this will do everything for us and it gives us the last elem of og, meaning our new head of ans, which we will return eventually
 * 
 * Then we just need to break the bond between og 1st and 2nd elem
 * So we store Og 2nd elem, and then do the rest
 * 
 * 
 */