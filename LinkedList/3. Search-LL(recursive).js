function searchInALinkedList(head, elem, idx) {
    if(head.next==null) return -1;

    if(head.data==elem){
        return idx;
    }
    return searchInALinkedList(head.next,elem,idx+1);
}
