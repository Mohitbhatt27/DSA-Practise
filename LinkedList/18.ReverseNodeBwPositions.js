function reverseList(head,left,right){
    if(!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for(let i = 1; i<left; i++){
        prev = prev.next;
    }

    let curr = prev.next;

    for(let i = left; i<right; i++){
        let newNode = curr.next;
        curr.next = newNode.next;
        newNode.next = prev.next;
        prev.next = newNode;
    }

    return dummy.next;
}