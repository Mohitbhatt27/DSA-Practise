function searchInALinkedList(head,elem){
    let temp = head; let idx = 0;
    while(temp!=null){
        if(temp.data==elem) return idx;
        temp=temp.next;
        idx++;
    }
    return -1;
}