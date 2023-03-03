function reverse(head){
    let current = head;
    let previous = null;
    while(current!=null){
        let newNode = current.next;
        current.next = previous;
        previous = current;
        current = newNode;
    }
    return previous;
}